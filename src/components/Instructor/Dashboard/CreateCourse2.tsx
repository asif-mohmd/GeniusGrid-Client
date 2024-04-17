import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ICreateCourse2 } from "../../../interfaces/IInstructorInterface";
import { useDispatch, useSelector } from "react-redux";
import { setCourseData2 } from "../../../redux/instructorSlices/courseData";
import { RootState } from "../../../redux/Store";

interface CreateCourse2Props {
  onNext: () => void;
  onPrev: () => void;
}

const CreateCourse2: React.FC<CreateCourse2Props> = ({ onNext, onPrev }) => {
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
  // Initial form values
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

  // Handle form submission
  const handleSubmit = (values: ICreateCourse2) => {
    // Update the values with current benefits and prerequisites states
    values.benefits = benefits.filter((benefit) => benefit.trim() !== "");
    values.prerequisites = prerequisites.filter(
      (prerequisite) => prerequisite.trim() !== ""
    );

    dispatch(setCourseData2(values));

    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    onNext()
  };

  // Function to add new input for benefits
  const addBenefitInput = () => {
    // Check if any existing input is null
    if (benefits.some((benefit) => benefit.trim() === "")) {
      toast.error("Please fill all existing benefit inputs");
    } else {
      setBenefits([...benefits, ""]);
    }
  };

  // Function to add new input for prerequisites
  const addPrerequisiteInput = () => {
    // Check if any existing input is null
    if (prerequisites.some((prerequisite) => prerequisite.trim() === "")) {
      toast.error("Please fill all existing prerequisite inputs");
    } else {
      setPrerequisites([...prerequisites, ""]);
    }
  };

  // Function to handle input change for benefits
  const handleBenefitInputChange = (index: number, value: string) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index] = value;
    setBenefits(updatedBenefits);
  };

  // Function to handle input change for prerequisites
  const handlePrerequisiteInputChange = (index: number, value: string) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index] = value;
    setPrerequisites(updatedPrerequisites);
  };

  // Function to handle deletion of input
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
      <div className="p-4 flex">
        <h1 className="text-3xl font-bold">Pre-requisites of course</h1>
      </div>
      <ToastContainer />
      <div className="px-3 py-4 flex justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
         
            <Form  className="sm:w-3/4 bg-white p-4 rounded-xl">
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
                  className="m-2 bg-blue-500 text-white py-1 px-2 rounded"
                >
                  +
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
                  className="m-2 bg-blue-500 text-white py-1 px-2 rounded"
                >
                  +
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
