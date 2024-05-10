import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import instructorEndpoints from "../../../../constraints/endpoints/instructorEndpoints";
import {
  setCourseData1,
  setCourseData3Empty,
} from "../../../../redux/instructorSlices/courseData";
import { RootState } from "../../../../redux/Store";
import { instructoraxios } from "../../../../constraints/axiosInterceptors/instructorAxiosInterceptors";
import { ICreateCourse1 } from "../../../../interfaces/ICourseInterfaceRedux";
import { FaUpload } from "react-icons/fa";


interface videoData {
  fileName: string;
  videoUrl: string;
}

const CreateCourse1 = () => {
  const [benefits, setBenefits] = useState<string[]>([""]);
  const [prerequisites, setPrerequisites] = useState<string[]>([""]);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);


  const [videoDetails, setvideoDetails] = useState<videoData[]>([]);

  const courseLevel = {
    Beginner: "Beginner",
    Intermediate: "Intermediate",
    Advanced: "Advanced"
  };

  const courseDetails = useSelector(
    (store: RootState) => store.courseData.courseData1
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (courseDetails) {
      // dispatch(setCourseData1Empty())
      setBenefits(courseDetails.benefits || []);
      setPrerequisites(courseDetails.prerequisites || []);

    }
    async function fetchCourseData() {
      try {
        const response = await instructoraxios.get(
          "http://localhost:4000/transcode/videoURL"
        );
        if (response && response.data) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const urls = response.data;
          console.log(urls, "vvvvvvvvvvvvvvvvvvvvvvvvvvv");
          setvideoDetails(urls); // Set video URLs in state
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    }
    fetchCourseData();
  }, [courseDetails]);

  const initialValues = {
    thumbnail: courseDetails?.thumbnail || null,
    courseName: courseDetails?.courseName || "",
    courseDescription: courseDetails?.courseDescription || "",
    coursePrice: courseDetails?.coursePrice || "",
    estimatedPrice: courseDetails?.estimatedPrice || "",
    courseCategory: courseDetails?.courseCategory || "",
    courseLevel: courseDetails?.courseLevel || "",
    totalVideos: courseDetails?.totalVideos || "",
    demoURL: courseDetails?.demoURL || "",
    benefits: courseDetails?.benefits || [""],
    prerequisites: courseDetails?.prerequisites || [""],
  };

  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required("Course name is required"),
    courseDescription: Yup.string().required("Course description is required"),
    coursePrice: Yup.number().required("Course price is required"),
    estimatedPrice: Yup.number().required("Estimated price is required"),
    courseCategory: Yup.string().required("Course category are required"),
    courseLevel: Yup.string().required("Course level is required"),
    totalVideos: Yup.number().required("Course category is required"),
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
    values: ICreateCourse1,
    { setSubmitting }: FormikHelpers<ICreateCourse1>
  ) => {
    try {
      // Filtering out empty benefits and prerequisites
      values.benefits = benefits.filter((benefit) => benefit.trim() !== "");
      values.prerequisites = prerequisites.filter(
        (prerequisite) => prerequisite.trim() !== ""
      );

      if(!selectedImage){
        toast.error("Upload Thumbnail")
      }else{
        values.thumbnail = selectedImage
        console.log(values, "ivde aaane"); // Log the values to check if they are correct

        dispatch(setCourseData1(values));
        dispatch(setCourseData3Empty());
        navigate(instructorEndpoints.addLessonPage);
      }
  
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };
  

  

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file selected by the user
    if (file) {
      // Check if a file is selected
      const reader = new FileReader(); // Create a new FileReader instance
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setSelectedImage(file);
        }
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
  };

  return (
    <div className="text-gray-900 bg-slate-50  w-full ">
      <ToastContainer />
      <div className="px-3 py-4 flex justify-center">
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="sm:w-3/4 bg-white p-4 rounded-xl mt-7">
              <div className="pb-3 pt-2 flex">
                <h1 className="text-2xl font-semibold">Create course</h1>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">


              <div className="container mx-auto py-4">
  <form className="p-6" encType="multipart/form-data">
    <label htmlFor="fileInput" className="relative cursor-pointer">
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      <div className="flex items-center justify-center bg-gray-100 cursor-pointer rounded-lg p-8">
        <FaUpload className="mr-2" />
        <span className="text-lg">Choose a thumbnail</span>
      </div>
    </label>
    {selectedImage && (
      <div>
        <p>Selected Image:</p>
        <img className="w-22 h-20" src={URL.createObjectURL(selectedImage)} alt="Selected" />
        <button onClick={handleClear}>Clear</button>
      </div>
    )}
  </form>
</div>



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
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseName && touched.courseName && !isSubmitting
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
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseDescription &&
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
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.coursePrice && touched.coursePrice && !isSubmitting
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
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.estimatedPrice &&
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
                    htmlFor="courseCategory"
                    className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Course categories
                  </label>
                  <Field
                    type="text"
                    id="courseCategory"
                    name="courseCategory"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseCategory && touched.courseCategory && !isSubmitting
                      ? "border-red-500"
                      : "border-gray-200"
                      } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course tags"
                  />
                  {errors.courseCategory && touched.courseCategory && !isSubmitting && (
                    <div className="text-red-500 border-red-500 text-xs italic">
                      {errors.courseCategory}
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
                    type="number"
                    id="totalVideos"
                    name="totalVideos"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.totalVideos && touched.totalVideos && !isSubmitting
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
                    as="select"
                    type="text"
                    id="courseLevel"
                    name="courseLevel"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseLevel && touched.courseLevel && !isSubmitting
                      ? "border-red-500"
                      : "border-gray-200"
                      } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course level"
                  >
                    <option value="">Select Demo URL</option>
                    {Object.values(courseLevel).map((level, index) => (
                      <option key={index} value={level}>
                        {level}
                      </option>
                    ))}
                  </Field>
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
                    as="select" // Use a select element
                    id="demoURL"
                    name="demoURL"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.demoURL && touched.demoURL && !isSubmitting
                      ? "border-red-500"
                      : "border-gray-200"
                      } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  >
                    <option value="">Select Demo URL</option>
                    {videoDetails.map((video, index) => (
                      <option key={index} value={video.videoUrl}>
                        {video.fileName}
                      </option>
                    ))}
                  </Field>
                  {errors.demoURL && touched.demoURL && !isSubmitting && (
                    <div className="text-red-500 border-red-500 text-xs italic">
                      {errors.demoURL}
                    </div>
                  )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <p className="text-lg font-semibold mb-2">
                    What are the benefits of this course
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
                    What are the prerequisites for this course
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

export default CreateCourse1;
