import { Formik, Form, Field ,FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { createCourse } from '../../../interfaces/IInstructorInterface';

interface CreateCourse1Props {
    onNext: () => void;
  }
  
  const CreateCourse1: React.FC<CreateCourse1Props> = ({ onNext }) => {
  const initialValues = {
    courseName: '',
    courseDescription: '',
    coursePrice: '',
    estimatedPrice: '',
    courseTags: '',
    courseCategory: '',
    courseLevel: '',
    introURL: ''
  };

  const validationSchema = Yup.object().shape({
    courseName: Yup.string().required('Course name is required'),
    courseDescription: Yup.string().required('Course description is required'),
    coursePrice: Yup.number().required('Course price is required'),
    estimatedPrice: Yup.number().required('Estimated price is required'),
    courseTags: Yup.string().required('Course tags are required'),
    courseLevel: Yup.string().required('Course level is required'),
    courseCategory: Yup.string().required('Course category is required'),
    introURL: Yup.string().required('Introduction URL is required')
  });
  
  const handleSubmit = async (values:createCourse, { setSubmitting }: FormikHelpers<createCourse>) => {
    try {
      // Make API call to store data in the database
      console.log(values)
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      // Handle response
      if (response.ok) {
        // Data successfully saved
        console.log('Data saved successfully');
        // Optionally, you can redirect the user or perform other actions
      } else {
        // Error handling
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="text-gray-900 bg-slate-50 h-screen w-full ">
     
      <div className="p-4 flex">
        <h1 className="text-3xl">Create Course</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="sm:w-3/4 bg-white p-4 rounded-xl">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label htmlFor="courseName" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Course Name</label>
                  <Field
                    type="text"
                    id="courseName"
                    name="courseName"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseName && touched.courseName && !isSubmitting ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course name"
                  />
                  {errors.courseName && touched.courseName && !isSubmitting && <div className="text-red-500 border-red-500 text-xs italic">{errors.courseName}</div>}
                </div>
  
                <div className="w-full  px-3 mb-6 md:mb-0">
                  <label htmlFor="courseDescription" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Course Description</label>
                  <Field
                    type="text"
                    id="courseDescription"
                    name="courseDescription"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseDescription && touched.courseDescription && !isSubmitting ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course description"
                  />
                  {errors.courseDescription && touched.courseDescription && !isSubmitting && <div className="text-red-500 border-red-500 text-xs italic">{errors.courseDescription}</div>}
                </div>
  
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="coursePrice" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Course Price</label>
                  <Field
                    type="number"
                    id="coursePrice"
                    name="coursePrice"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.coursePrice && touched.coursePrice && !isSubmitting ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course price"
                  />
                  {errors.coursePrice && touched.coursePrice && !isSubmitting && <div className="text-red-500 border-red-500 text-xs italic">{errors.coursePrice}</div>}
                </div>
  
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="estimatedPrice" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Estimated Price</label>
                  <Field
                    type="number"
                    id="estimatedPrice"
                    name="estimatedPrice"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.estimatedPrice && touched.estimatedPrice && !isSubmitting ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter estimated price"
                  />
                  {errors.estimatedPrice && touched.estimatedPrice && !isSubmitting && <div className="text-red-500 border-red-500 text-xs italic">{errors.estimatedPrice}</div>}
                </div>
  
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="courseTags" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Course Tags</label>
                  <Field
                    type="text"
                    id="courseTags"
                    name="courseTags"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseTags && touched.courseTags && !isSubmitting ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course tags"
                  />
                  {errors.courseTags && touched.courseTags && !isSubmitting && <div className="text-red-500 border-red-500 text-xs italic">{errors.courseTags}</div>}
                </div>
  
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="courseCategory" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Course Category</label>
                  <Field
                    type="text"
                    id="courseCategory"
                    name="courseCategory"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseCategory && touched.courseCategory && !isSubmitting ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course category"
                  />
                  {errors.courseCategory && touched.courseCategory && !isSubmitting && <div className="text-red-500 border-red-500 text-xs italic">{errors.courseCategory}</div>}
                </div>
  
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="courseLevel" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Course Level</label>
                  <Field
                    type="text"
                    id="courseLevel"
                    name="courseLevel"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.courseLevel && touched.courseLevel && !isSubmitting ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter course level"
                  />
                  {errors.courseLevel && touched.courseLevel && !isSubmitting && <div className="text-red-500 border-red-500 text-xs italic">{errors.courseLevel}</div>}
                </div>
  
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="introURL" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">Intro URL</label>
                  <Field
                    type="text"
                    id="introURL"
                    name="introURL"
                    className={`appearance-none block w-full bg-slate-50 text-gray-700 border ${errors.introURL && touched.introURL && !isSubmitting ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                    placeholder="Enter intro URL"
                  />
                  {errors.introURL && touched.introURL && !isSubmitting && <div className="text-red-500 border-red-500 text-xs italic">{errors.introURL}</div>}
                </div>
  
                {/* Add similar Field components for other inputs */}
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
              <button onClick={onNext}>Next</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateCourse1;
