import React from 'react';

function CourseDetailsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="text-2xl font-bold mb-2">Course Details</div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1">Course Title:</div>
            <p className="text-gray-700">Introduction to Web Development</p>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1">Instructor:</div>
            <p className="text-gray-700">John Smith</p>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1">Description:</div>
            <p className="text-gray-700">This course provides an overview of web development technologies...</p>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1">Duration:</div>
            <p className="text-gray-700">10 weeks</p>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1">Price:</div>
            <p className="text-gray-700">$99.99</p>
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1">Prerequisites:</div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Basic understanding of HTML</li>
              <li>Basic understanding of CSS</li>
              <li>Basic understanding of JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsPage;
