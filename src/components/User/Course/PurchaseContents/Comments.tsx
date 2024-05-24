/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useEffect, useState } from "react";
import { userAxios } from "../../../../constraints/axiosInterceptors/userAxiosInterceptors";
import courseEndspoints from "../../../../constraints/endpoints/courseEndspoints";
import userEndpoints from "../../../../constraints/endpoints/userEndpoints";
import { User } from "../../../../interfaces/UserInterfaces/IUserDetails";

interface PurchaseContentsProps {
  courseId: string,
  videoId: string,
  questions: any,
  onQuestionAdded: () => void,
}

const Comments: React.FC<PurchaseContentsProps> = ({ courseId, videoId, questions ,onQuestionAdded}) => {
  const [question, setQuestion] = useState<string>("");
  const [userData, setUserData] = useState<User | null>(null);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

  const handleReplayToggle = (index: number) => {
    setSelectedQuestionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleQuestionSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newQuestion = {
      user: {
        name: userData?.name || "Anonymous"
      },
      question: question,
      questionReplies: []
    };

    const questionDetails = {
      newQuestion,
      courseId,
      videoId
    };

    try {
      const response = await userAxios.post(courseEndspoints.addQuestion, questionDetails);
      setQuestion("");
      onQuestionAdded();
      console.log(response, "----");
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userDetails = await userAxios.get(userEndpoints.userDetails);
        setUserData(userDetails.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className="mt-4">
      <textarea
        id="message"
        value={question}
        rows={4}
        onChange={(e) => setQuestion(e.target.value)}
        className="block w-full px-4 py-2 text-sm text-black bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleQuestionSubmit}
      >
        Submit
      </button>

      <div className="mt-4">
        {questions.map((question:any, index:any) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{question.question}</p>
              <button
                className="text-xs text-blue-500 focus:outline-none"
                onClick={() => handleReplayToggle(index)}
              >
                {selectedQuestionIndex === index ? "Hide Replies" : "View Replies"}
              </button>
            </div>
            {selectedQuestionIndex === index && (
              <div className="mt-2">
                {question.questionReplies.map((reply:any, replyIndex:any) => (
                  <div key={replyIndex} className="mt-2">
                    <p>{reply.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
