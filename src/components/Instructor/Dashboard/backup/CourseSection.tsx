
import { ICreateCourse3 } from '../../../../interfaces/ICourseInterface';

interface CourseDataType {
    formData: ICreateCourse3;
    setFormData: React.Dispatch<React.SetStateAction<ICreateCourse3>>;
}

const CourseSection: React.FC<CourseDataType> = ({ formData, setFormData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to server
        console.log(formData);
        // Reset form data or any other action after submission
        setFormData({} as ICreateCourse3); // Assuming you want to reset the form data after submission
    };

    return (
        <div className="text-gray-900 bg-slate-50 w-full">
            <div className="px-3 py-4 flex justify-center">
                <div className="sm:w-3/4 bg-white p-4 rounded-xl">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="videoTitle" className="block text-sm font-medium text-gray-700">
                                Video Title
                            </label>
                            <input
                                type="text"
                                id="videoTitle"
                                name="videoTitle"
                                value={formData.videoTitle}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="videoURL" className="block text-sm font-medium text-gray-700">
                                Video URL
                            </label>
                            <input
                                type="text"
                                id="videoURL"
                                name="videoURL"
                                value={formData.videoURL}
                                onChange={handleChange}
                                className="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                            />
                        </div>
                  
                        {/* You can repeat the above structure for other form fields */}
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseSection;
