import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../Components/Layout.jsx";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="flex-1 bg-gray-100 p-8 md:p-16 flex items-center justify-center animate-fade-in-left">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Welcome to Flexicode</h1>
            <p className="text-lg mb-6 animate-fade-in-down">
              Flexicode is an innovative platform designed to streamline your coding and development workflow.
              Whether you need to experiment with code in a playground or compile various programming languages,
              Flexicode has got you covered. Our user-friendly interface and powerful features are tailored
              to enhance your coding experience and productivity.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-gray-900 text-white p-8 md:p-16 flex items-center justify-center">
          <div className="space-y-4">
            <Link
              to="/code-playground"
              className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Code Playground
            </Link>
            <Link
              to="/general-compiler"
              className="block bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded text-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              General Compiler
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
