
interface FormData {
    videoTitle: string;
    videoURL: string;
   }
   // Define a type for the setFormData function
  type SetFormData = React.Dispatch<React.SetStateAction<FormData>>;
  
  // Use the defined types to type the props of the AddContent component
  interface AddContentProps {
   formData: FormData;
   setFormData: SetFormData;
   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  }
  
  const AddContent: React.FC<AddContentProps> = ({formData,setFormData,handleSubmit}) => {
  
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const {name,value} = e.target
      setFormData((prev)=>{
        return {...prev,[name]:value}
      })
    }
  
    // Function to add a new item to the array
  
    return (
      <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-3/4">
        <h2 className="text-2xl font-bold mb-4">Content</h2>
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
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
              placeholder="Enter video title"
              required
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
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
              placeholder="Enter video URL"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    );
  }
  
  
  export default AddContent;
  