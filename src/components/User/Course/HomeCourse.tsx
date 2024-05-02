import React from "react";

function HomeCourse() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Card */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm">
          <a href="#">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/350x200"
              alt=""
            />
          </a>
          <div className="p-4">
            <a href="#">
              <h5 className="mb-2 text-lg font-semibold text-gray-800">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-2 text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021
              so far, in reverse chronological order.
            </p>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                Read more
              </a>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-500 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11l7-7 7 7M5 19l7-7 7 7"
                  ></path>
                </svg>
                <span className="text-gray-700">4.5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm">
          <a href="#">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/350x200"
              alt=""
            />
          </a>
          <div className="p-4">
            {/* Content for the second card */}
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm">
          <a href="#">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/350x200"
              alt=""
            />
          </a>
          <div className="p-4">
            {/* Content for the third card */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCourse;
