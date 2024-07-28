import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import Layout from '../Components/Layout';
import '../index.css';

const GeneralCompiler = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState(14);

  const handleRun = () => {
    // Placeholder for running the code
    setOutput('Executed output will appear here...');
  };

  return (
    <Layout>
      <div className="flex h-screen bg-gray-800 text-white">
        <div className="w-2/3 p-4 flex flex-col space-y-2">
          <div className="flex mb-2 space-x-4">
            <div className="flex flex-col">
              <label htmlFor="language" className="mb-1">Language</label>
              <select
                id="language"
                className="p-2 bg-gray-700 border border-gray-600 rounded text-white transition duration-300 ease-in-out hover:bg-gray-600"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="csharp">C#</option>
                <option value="cpp">C++</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="theme" className="mb-1">Theme</label>
              <select
                id="theme"
                className="p-2 bg-gray-700 border border-gray-600 rounded text-white transition duration-300 ease-in-out hover:bg-gray-600"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                <option value="vs-dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="fontSize" className="mb-1">Font Size</label>
              <select
                id="fontSize"
                className="p-2 bg-gray-700 border border-gray-600 rounded text-white transition duration-300 ease-in-out hover:bg-gray-600"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
              >
                <option value={12}>12</option>
                <option value={14}>14</option>
                <option value={16}>16</option>
                <option value={18}>18</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
          <Editor
            height="75vh"
            language={language}
            value={code}
            theme={theme}
            options={{ fontSize: fontSize }}
            onChange={(value) => setCode(value)}
            className="transition duration-500 ease-in-out"
          />
        </div>
        <div className="w-1/3 p-4 flex flex-col space-y-4 pt-10">
          <button
            onClick={handleRun}
            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded flex items-center justify-center transition transform hover:scale-105 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Run
          </button>
          <div className=" mb-2 h-72 transition duration-500 ease-in-out transform hover:scale-105">
            <textarea
              className="w-full h-full p-2 bg-gray-900 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Input"
            />
          </div>
          <div className=" h-72 transition duration-500 ease-in-out transform hover:scale-105">
            <textarea
              className="w-full h-full p-2 bg-gray-900 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              value={output}
              readOnly
              placeholder="Output"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GeneralCompiler;
