import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ICreateCourse3 } from "../../../interfaces/IInstructorInterface";

interface CreateCourse3Props {
  onNext: () => void;
  onPrev: () => void;
  data: string
}
const CreateCourse3: React.FC<CreateCourse3Props> = ({ onNext, onPrev , data}) => {
  const initialValues = {
    videoTitle: "",
    videoURL: "",
    subtitleURL: "",
    videoDescription: "",
    link: "",
  };

  const validationSchema = Yup.object().shape({
    videoTitle: Yup.string().required("Video title is required"),
    videoURL: Yup.string().required("Video URL is required"),
    subtitleURL: Yup.string().required("Subtitle URL is required"),
    videoDescription: Yup.string().required("Video Description is required"),
    link: Yup.string().required("Course link are required"),
  });

  const handleSubmit = async (
    values: ICreateCourse3,
    { setSubmitting }: FormikHelpers<ICreateCourse3>
  ) => {
    try {
      // Make API call to store data in the database
      console.log(values);

      onNext();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="text-gray-900 bg-slate-50 h-screen w-full ">
      <div className="px-3 py-4 flex justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="sm:w-3/4 bg-white p-4 rounded-xl">
               <div className="pb-7 pt-2 flex">
                <h1 className="text-2xl font-semibold">{data}</h1>
              </div>
              
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="videoTitle"
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Video Title
                  </label>
                  <Field
                    type="text"
                    id="videoTitle"
                    name="videoTitle"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.videoTitle && touched.videoTitle && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter video title"
                  />
                  {errors.videoTitle && touched.videoTitle && !isSubmitting && (
                    <div className="text-red-500 border-red-500 text-xs italic">
                      {errors.videoTitle}
                    </div>
                  )}
                </div>

                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="videoURL"
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Video URL
                  </label>
                  <Field
                    type="text"
                    id="videoURL"
                    name="videoURL"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.videoURL && touched.videoURL && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter video URL"
                  />
                  {errors.videoURL && touched.videoURL && !isSubmitting && (
                    <div className="text-red-500 border-red-500 text-xs italic">
                      {errors.videoURL}
                    </div>
                  )}
                </div>

                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="subtitleURL"
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Subtitle URL
                  </label>
                  <Field
                    type="text"
                    id="subtitleURL"
                    name="subtitleURL"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.subtitleURL && touched.subtitleURL && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter subtitle URL"
                  />
                  {errors.subtitleURL &&
                    touched.subtitleURL &&
                    !isSubmitting && (
                      <div className="text-red-500 border-red-500 text-xs italic">
                        {errors.subtitleURL}
                      </div>
                    )}
                </div>

                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="videoDescription"
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Video Description
                  </label>
                  <Field
                    type="text"
                    id="videoDescription"
                    name="videoDescription"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.videoDescription &&
                      touched.videoDescription &&
                      !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter video description"
                  />
                  {errors.videoDescription &&
                    touched.videoDescription &&
                    !isSubmitting && (
                      <div className="text-red-500 border-red-500 text-xs italic">
                        {errors.videoDescription}
                      </div>
                    )}
                </div>

                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="link"
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Link 1
                  </label>
                  <Field
                    type="text"
                    id="link"
                    name="link"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${
                      errors.link && touched.link && !isSubmitting
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course link"
                  />
                  {errors.link && touched.link && !isSubmitting && (
                    <div className="text-red-500 border-red-500 text-xs italic">
                      {errors.link}
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={onPrev}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
              >
                Prev
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateCourse3;
