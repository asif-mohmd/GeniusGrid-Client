import React, { useState, ChangeEvent, FormEvent } from "react";
import userEndpoints from "../../../constraints/endpoints/userEndpoints";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
}

const Signup: React.FC = () => {
  // State to hold input field values
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    avatar: "",
    role: ""
  });

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e,"targettttttttttttttttttttttttt")
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Example: You can send this data to your backend API
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white px-14 rounded-xl shadow-lg py-8">
        <h6 className="text-xl font-medium mb-2 text-center ">Instructor Signup</h6>
        <form className="w-full max-w-md " onSubmit={handleSubmit}>
          <div className="mb-6 ">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="avatar"
            >
              Avatar
            </label>
            <input
              className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="avatar"
              type="text"
              value={formData.avatar}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <input
              className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded-md mb-2">
              Create account
            </button>
            <div className="m-3">
              <span className="text-gray-600 text-sm">
                Already have an account?{" "}
                <Link className="text-blue-600 font-semibold" to={userEndpoints.login}>
                  Login In.
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;