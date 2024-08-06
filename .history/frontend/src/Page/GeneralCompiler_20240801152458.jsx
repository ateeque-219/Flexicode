import React, { useState } from 'react';
import axios from 'axios';
import Editor from '@monaco-editor/react';
import Layout from '../Components/Layout';
import { FiMenu } from 'react-icons/fi';
import '../index.css';
const apiHost = import.meta.env.VITE_API
const GeneralCompiler = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState(14);
  const [isLoading, setIsLoading] = useState(false);
  const [copying, setCopying] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRun = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/v1/compile', {
        code,
        language,
        input
      });
      setOutput(response.data.output);
    } catch (error) {
      setOutput('An error occurred while executing the code.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopying(type))
      .catch(() => setCopying(''));
    
    // Reset copying state after 1 second
    setTimeout(() => setCopying(''), 1000);
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row h-screen bg-gray-800 text-white">
        <div className="w-full lg:w-2/3 p-4 flex flex-col space-y-2">
          <div className="flex justify-between mb-2 lg:hidden">
            <h1 className="text-xl font-semibold">Compiler</h1>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-gray-700 rounded">
              <FiMenu className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className={`lg:flex mb-2 space-x-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-col">
              <label htmlFor="language" className="mb-1">Language</label>
              <select
                id="language"
                className="p-2 bg-gray-700 border border-gray-600 rounded text-white transition duration-300 ease-in-out hover:bg-gray-600"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="javascript">JavaScript</option>
                <option value="c">C</option>
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
        <div className="w-full lg:w-1/3  p-4 flex flex-col space-y-4 pt-10 lg:pt-0 mt-9">
          <button
            onClick={handleRun}
            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded flex items-center justify-center transition transform hover:scale-105 duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4m0 4v4m-4-4h4m4 0h4" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
            {isLoading ? 'Running...' : 'Run'}
          </button>
          <div className="mb-2 h-48 lg:h-72 relative">
            <textarea
              className="w-full h-full p-2 bg-gray-900 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Input"
            />
            <button
              onClick={() => copyToClipboard(input, 'input')}
              className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white p-2 rounded transition transform hover:scale-105 duration-300"
            >
              {copying === 'input' ? (
                <svg
                  className="h-5 w-5 animate-pulse"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V3m0 15v-3m0 0v-3m0 0v-3m0 0V9m-6 6h12M6 9h12M6 15h12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10H3v10h6V10zm12 0h-6v10h6V10z" />
                </svg>
              )}
            </button>
          </div>
          <div className="h-48 lg:h-72 relative">
            <textarea
              className="w-full h-full p-2 bg-gray-900 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              value={output}
              readOnly
              placeholder="Output"
            />
            <button
              onClick={() => copyToClipboard(output, 'output')}
              className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white p-2 rounded transition transform hover:scale-105 duration-300"
            >
              {copying === 'output' ? (
                <svg
                  className="h-5 w-5 animate-pulse"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V3m0 15v-3m0 0v-3m0 0v-3m0 0V9m-6 6h12M6 9h12M6 15h12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10H3v10h6V10zm12 0h-6v10h6V10z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GeneralCompiler;
