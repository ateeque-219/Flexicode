import React, { useState, useEffect } from 'react';
import Layout from '../Components/Layout';
import Editor from '../Components/Development/Editor';

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
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor
            language="javascript"
            displayName="JavaScript"
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
