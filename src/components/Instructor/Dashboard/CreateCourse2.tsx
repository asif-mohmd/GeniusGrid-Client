import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ICreateCourse2 } from "../../../interfaces/ICourseInterfaceRedux";
import { useDispatch, useSelector } from "react-redux";
import { setCourseData2 } from "../../../redux/instructorSlices/courseData";
import { RootState } from "../../../redux/Store";

interface CreateCourse2Props {
  onNext: () => void;
  onPrev: () => void;
  data:string
}

const CreateCourse2: React.FC<CreateCourse2Props> = ({ onNext, onPrev , data}) => {
  const [benefits, setBenefits] = useState<string[]>([""]);
  const [prerequisites, setPrerequisites] = useState<string[]>([""]);

  const { courseData2 } = useSelector((store: RootState) => store.courseData);

  const dispatch = useDispatch();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    benefits: Yup.array().of(Yup.string()).required("Benefits are required"),
    prerequisites: Yup.array()
      .of(Yup.string())
      .required("Prerequisites are required"),
  });

  console.log(courseData2?.benefits, "tyytyytytytyyt");
  const initialValues = {
    benefits: courseData2?.benefits || [""],
    prerequisites: courseData2?.prerequisites || [""],
  };

  useEffect(() => {
    if (courseData2) {
      setBenefits(courseData2.benefits || [""]);
      setPrerequisites(courseData2.prerequisites || [""]);
    }
  }, [courseData2]);

 
  const handleSubmit = (values: ICreateCourse2) => {
    values.benefits = benefits.filter((benefit) => benefit.trim() !== "");
    values.prerequisites = prerequisites.filter(
      (prerequisite) => prerequisite.trim() !== ""
    );

    dispatch(setCourseData2(values));
    console.log("Form submitted with values:", values);
    onNext()
  };

  
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

  return (
    <div className="text-gray-900 bg-slate-50 h-screen w-full">
     
      <ToastContainer />
      <div className="px-3 py-4 flex justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
         
            <Form  className="sm:w-3/4 bg-white p-4 rounded-xl">
            <div className="pb-7 pt-2 flex">
                <h1 className="text-2xl font-semibold">{data}</h1>
              </div>
              <div>
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

              <div>
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

              <button
                onClick={onPrev}
                className="m-2 bg-blue-500 text-white py-1 px-2 rounded"
              >
                Prev
              </button>
              <button
                type="submit"
                className="m-2 bg-blue-500 text-white py-1 px-2 rounded"
              >
                Next
              </button>
            </Form>
          
        </Formik>
      </div>
    </div>
  );
};

export default CreateCourse2;
