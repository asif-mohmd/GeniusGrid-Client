import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg">
        <h6 className="text-xl font-medium m-7">Login to your account</h6>
        <form className="w-full max-w-md">
          <div className="mb-6">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="full-name"
            >
              Email
            </label>
            <input
              className="bg-white appearance-none border-2 border-gray-100 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="email"
              type="text"
              defaultValue=""
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
              placeholder="******************"
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 ">
              Login now
            </button>
            <div className="m-3">
              <span className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 font-semibold">
                  Sign Up.
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
