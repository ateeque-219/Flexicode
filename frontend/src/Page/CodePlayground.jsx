import React, { useState, useEffect } from 'react';
import Layout from '../Components/Layout';
import Editor from '../Components/Development/Editor';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const CodePlayground = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Layout>
      <div className="flex flex-col h-screen bg-gray-900">
        <div className="flex flex-1 p-4 space-x-4 bg-gray-900">
          <Editor
            language="xml"
            icon={<HtmlIcon className="animate-bounce text-red-500" />}
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            icon={<CssIcon className="animate-spin text-blue-500" />}
            value={css}
            onChange={setCss}
          />
          <Editor
            language="javascript"
            icon={<JavascriptIcon className="animate-pulse text-yellow-500" />}
            value={js}
            onChange={setJs}
          />
        </div>
        <div className="flex-1 p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">Output</h2>
          <div className="w-full h-full border border-gray-700 bg-gray-100 p-4 rounded-md">
            <iframe
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
              srcDoc={srcDoc}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CodePlayground;
