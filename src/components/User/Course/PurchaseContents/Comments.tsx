import { FormEvent, useEffect, useState } from "react";
import { userAxios } from "../../../../constraints/axiosInterceptors/userAxiosInterceptors";
import courseEndspoints from "../../../../constraints/endpoints/courseEndspoints";

import userEndpoints from "../../../../constraints/endpoints/userEndpoints";
import { User } from "../../../../interfaces/UserInterfaces/IUserDetails";

interface PurchaseContentsProps {

  courseId:string,
  videoId:string
}

const Comments: React.FC<PurchaseContentsProps> = ({courseId,videoId})=>{
  const [question, setQuestion] = useState<string>("");
  const [userData, setUserData] = useState<User | null>(null);

console.log(courseId,"ggggg",videoId,"lf",userData)
  const handleQuestionSubmit = async (e:FormEvent) => {
    e.preventDefault(); // This prevents the default form submission
    console.log(question, "[[[[[[[[[");

    const newQuestion = {
      user:{
        name:userData?.name
      },
      question:question,
      questionReplies:[]
    }

    const questionDetails ={
      newQuestion,
      courseId,
      videoId
    }
console.log(questionDetails,"qqqwwweeeeeeerrrrrrrrrrrrrrr")

    const response = await userAxios.post(courseEndspoints.addQuestion,questionDetails)
console.log(response,"----")

  }

  useEffect(() => {
    async function fetchCourseData() {
      try {
        const userDetails = await userAxios.get(userEndpoints.userDetails);
        console.log(userDetails)
        setUserData(userDetails.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    }
    fetchCourseData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="mt-3">
        <div className="">
          <textarea
            id="message"
            value={question}
            rows={4}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="text-right m-3">
          <button 
            className="bg-black text-white px-2 py-1 rounded-md" 
            onClick={handleQuestionSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Comments;
