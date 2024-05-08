import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import {  ICreateCourse2 } from "../../../../interfaces/ICourseInterfaceRedux";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import courseEndspoints from "../../../../constraints/endpoints/courseEndspoints";
import { instructoraxios } from "../../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import { useNavigate } from "react-router-dom";
import instructorEndpoints from "../../../../constraints/endpoints/instructorEndpoints";
import {   setCourseData2, setCourseData3 } from "../../../../redux/instructorSlices/courseData";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RootState } from "../../../../redux/Store";

const EditCourse = () => {
  const [benefits, setBenefits] = useState<string[]>([""]);
  const [prerequisites, setPrerequisites] = useState<string[]>([""]);

  const courseId = useSelector((state:RootState)=>state.courseData.privateIdStore)
  const courseDetails = useSelector((state:RootState)=>state.courseData.courseData3)

  const dispatch = useDispatch()


  useEffect(()=>{
    async function fetchCourseData() {
      try {
        const response = await instructoraxios.get(`${courseEndspoints.courseDetails}/${courseId}`);
        
        dispatch(setCourseData3(response.data.response))
        setBenefits(response.data.response.benefits);
        setPrerequisites(response.data.response.prerequisites);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    }

    fetchCourseData()
  },[courseId,dispatch])


  

  const navigate = useNavigate();
  
// console.log(courseDetails.courseName,"haiiiiiiiiiiii")

const initialValues = {
  _id: courseId, // Replace with actual ID or a placeholder
  courseName: courseDetails?.courseName || "",
  courseDescription: courseDetails?.courseDescription || "",
  coursePrice: courseDetails?.coursePrice || "",
  estimatedPrice: courseDetails?.estimatedPrice || "",
  courseTags: courseDetails?.courseTags || "",
  courseLevel: courseDetails?.courseLevel || "",
  totalVideos: courseDetails?.totalVideos || "",
  demoURL: courseDetails?.demoURL || "",
  benefits: courseDetails?.benefits || [" "],
  prerequisites: courseDetails?.prerequisites || [" "],
};

  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required("Course name is required"),
    courseDescription: Yup.string().required("Course description is required"),
    coursePrice: Yup.number().required("Course price is required"),
    estimatedPrice: Yup.number().required("Estimated price is required"),
    courseTags: Yup.string().required("Course tags are required"),
    courseLevel: Yup.string().required("Course level is required"),
    totalVideos: Yup.string().required("Course category is required"),
    demoURL: Yup.string().required("Introduction URL is required"),
    benefits: Yup.array().of(Yup.string()).required("Benefits are required"),
    prerequisites: Yup.array()
      .of(Yup.string())
      .required("Prerequisites are required"),
  });

  const addBenefitInput = () => {
    if (benefits.some((benefit) => benefit.trim() === "")) {
      toast.error("Please fill all existing benefit inputs");
    } else {
      setBenefits([...benefits, ""]);
    }
  };

  const addPrerequisiteInput = () => {
    if (prerequisites.some((prerequisite) => prerequisite.trim() === "")) {
      toast.error("Please fill all existing prerequisite inputs");
    } else {
      setPrerequisites([...prerequisites, ""]);
    }
  };

  const handleBenefitInputChange = (index: number, value: string) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index] = value;
    setBenefits(updatedBenefits);
  };

  const handlePrerequisiteInputChange = (index: number, value: string) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index] = value;
    setPrerequisites(updatedPrerequisites);
  };

  const handleDeleteInput = (index: number, type: string) => {
    if (type === "benefits") {
      const updatedBenefits = [...benefits];
      updatedBenefits.splice(index, 1);
      setBenefits(updatedBenefits);
    } else if (type === "prerequisites") {
      const updatedPrerequisites = [...prerequisites];
      updatedPrerequisites.splice(index, 1);
      setPrerequisites(updatedPrerequisites);
    }
  };

  const handleSubmit = async (
    values: ICreateCourse2,
    { setSubmitting }: FormikHelpers<ICreateCourse2>
  ) => {
    try {
      values.benefits = benefits.filter((benefit) => benefit.trim() !== "");
      values.prerequisites = prerequisites.filter(
        (prerequisite) => prerequisite.trim() !== ""
      );
      console.log(values, "--------------------");
      console.log("ivde aaane");
      dispatch(setCourseData2(values))
     
      navigate(instructorEndpoints.addLessonPage);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => {
    console.log("workin gbackkk");
    navigate(instructorEndpoints.myCourses);
  };

  return (
    <div className="text-gray-900 bg-slate-50 h-screen w-full ">
      <ToastContainer />
      <div className="px-3 py-4 flex justify-center">
        <Formik
          enableReinitialize={true} 
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="sm:w-3/4 bg-white p-4 rounded-xl">
              <div className="pb-7 pt-2 flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Edit course</h1>
                <div>
                  <h1 className="cursor-pointer">
                    <IoMdArrowRoundBack
                      onClick={handleBack}
                      className="text-4xl hover:text-gray-700 focus:text-gray-700 transition duration-300 ease-in-out"
                    />
                  </h1>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="courseName"
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Course Name
                  </label>
                  <Field
                    type="text"
                    id="courseName"
                    name="courseName"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.courseName && touched.courseName && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course name"
                  />
                  {errors.courseName && touched.courseName && !isSubmitting && (
                    <div className="text-red-500 border-red-500 text-xs italic">
                      {errors.courseName}
                    </div>
                  )}
                </div>

                <div className="w-full  px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="courseDescription"
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Course Description
                  </label>
                  <Field
                    type="text"
                    id="courseDescription"
                    name="courseDescription"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.courseDescription &&
                      touched.courseDescription &&
                      !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course description"
                  />
                  {errors.courseDescription &&
                    touched.courseDescription &&
                    !isSubmitting && (
                      <div className="text-red-500 border-red-500 text-xs italic">
                        {errors.courseDescription}
                      </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="coursePrice"
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Course Price
                  </label>
                  <Field
                    type="number"
                    id="coursePrice"
                    name="coursePrice"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.coursePrice && touched.coursePrice && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course price"
                  />
                  {errors.coursePrice &&
                    touched.coursePrice &&
                    !isSubmitting && (
                      <div className="text-red-500 border-red-500 text-xs italic">
                        {errors.coursePrice}
                      </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="estimatedPrice"
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Estimated Price
                  </label>
                  <Field
                    type="number"
                    id="estimatedPrice"
                    name="estimatedPrice"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.estimatedPrice &&
                      touched.estimatedPrice &&
                      !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter estimated price"
                  />
                  {errors.estimatedPrice &&
                    touched.estimatedPrice &&
                    !isSubmitting && (
                      <div className="text-red-500 border-red-500 text-xs italic">
                        {errors.estimatedPrice}
                      </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="courseTags"
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Course Tags
                  </label>
                  <Field
                    type="text"
                    id="courseTags"
                    name="courseTags"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.courseTags && touched.courseTags && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course tags"
                  />
                  {errors.courseTags && touched.courseTags && !isSubmitting && (
                    <div className="text-red-500 border-red-500 text-xs italic">
                      {errors.courseTags}
                    </div>
                  )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="totalVideos"
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Total Videos
                  </label>
                  <Field
                    type="text"
                    id="totalVideos"
                    name="totalVideos"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.totalVideos && touched.totalVideos && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Amount of videos"
                  />
                  {errors.totalVideos &&
                    touched.totalVideos &&
                    !isSubmitting && (
                      <div className="text-red-500 border-red-500 text-xs italic">
                        {errors.totalVideos}
                      </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="courseLevel"
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Course Level
                  </label>
                  <Field
                    type="text"
                    id="courseLevel"
                    name="courseLevel"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.courseLevel && touched.courseLevel && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course level"
                  />
                  {errors.courseLevel &&
                    touched.courseLevel &&
                    !isSubmitting && (
                      <div className="text-red-500 border-red-500 text-xs italic">
                        {errors.courseLevel}
                      </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="demoURL"
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Demo URL
                  </label>
                  <Field
                    type="text"
                    id="demoURL"
                    name="demoURL"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.demoURL && touched.demoURL && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter Demo URL"
                  />
                  {errors.demoURL && touched.demoURL && !isSubmitting && (
                    <div className="text-red-500 border-red-500 text-xs italic">
                      {errors.demoURL}
                    </div>
                  )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <p className="text-lg font-semibold mb-2">
                    What are the benefits for the students in the course
                  </p>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="mb-3 flex">
                      <Field
                        name={`benefits.${index}`}
                        type="text"
                        as="input"
                        className="appearance-none block bg-gray-50 text-gray-700 border border-gray-300 rounded-md p-1  w-5/6 mr-2"
                        value={benefit}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleBenefitInputChange(index, e.target.value)
                        }
                      />
                      {index !== benefits.length - 1 && (
                        <button
                          type="button"
                          onClick={() => handleDeleteInput(index, "benefits")}
                          className="bg-red-500 text-white py-1 px-2 rounded"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                  <ErrorMessage
                    name="benefits"
                    component="div"
                    className="text-red-500"
                  />
                  <button
                    type="button"
                    onClick={addBenefitInput}
                    className="m-2 bg-green-500 text-white py-1 px-2 rounded"
                  >
                    Add new
                  </button>
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <p className="text-lg font-semibold mb-2">
                    What are the prerequisites for students in this course
                  </p>
                  {prerequisites.map((prerequisite, index) => (
                    <div key={index} className="mb-3 flex">
                      <Field
                        name={`prerequisites.${index}`}
                        type="text"
                        as="input"
                        className="appearance-none block bg-gray-50 text-gray-700 border border-gray-300 rounded-md p-1  w-5/6 mr-2"
                        value={prerequisite}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handlePrerequisiteInputChange(index, e.target.value)
                        }
                      />
                      {index !== prerequisites.length - 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteInput(index, "prerequisites")
                          }
                          className="bg-red-500 text-white py-1 px-2 rounded"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                  <ErrorMessage
                    name="prerequisites"
                    component="div"
                    className="text-red-500"
                  />
                  <button
                    type="button"
                    onClick={addPrerequisiteInput}
                    className="m-2 bg-green-500 text-white py-1 px-2 rounded"
                  >
                    Add new
                  </button>
                </div>

                {/* Add similar Field components for other inputs */}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-mono font-bold py-3 px-6 rounded-md "
                >
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditCourse;
