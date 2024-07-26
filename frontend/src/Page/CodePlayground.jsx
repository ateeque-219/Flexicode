import React from 'react';
import Layout from '../Components/Layout.jsx';

const CodePlayground = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        {/* Upper Half */}
        <div className="flex-1 flex flex-col md:flex-row border-b border-gray-300">
          {/* CSS Section */}
          <div className="flex-1 p-4 bg-gray-100 border-r border-gray-300 md:border-r-0 md:border-b md:border-gray-300">
            <h2 className="text-xl font-semibold mb-2">CSS</h2>
            <textarea
              className="w-full h-full p-2 border border-gray-300 rounded-md"
              placeholder="Write your CSS code here..."
            ></textarea>
          </div>

          {/* HTML Section */}
          <div className="flex-1 p-4 bg-gray-200 border-r border-gray-300 md:border-r-0 md:border-b md:border-gray-300">
            <h2 className="text-xl font-semibold mb-2">HTML</h2>
            <textarea
              className="w-full h-full p-2 border border-gray-300 rounded-md"
              placeholder="Write your HTML code here..."
            ></textarea>
          </div>

          {/* JS Section */}
          <div className="flex-1 p-4 bg-gray-300">
            <h2 className="text-xl font-semibold mb-2">JS</h2>
            <textarea
              className="w-full h-full p-2 border border-gray-300 rounded-md"
              placeholder="Write your JS code here..."
            ></textarea>
          </div>
        </div>

        {/* Lower Half */}
        <div className="flex-1 p-4 bg-gray-900 text-white">
          <h2 className="text-xl font-semibold mb-4">Output</h2>
          <div className="w-full h-full border border-gray-700 bg-gray-800 p-4 rounded-md">
            {/* This is where the output would be displayed */}
            <p className="text-gray-400">Your output will appear here...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CodePlayground;
