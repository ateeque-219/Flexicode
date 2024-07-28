import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = (props) => {
  const { icon, value, language, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="editor-container flex flex-col flex-1 p-2 border rounded-lg bg-gray-800 shadow-lg">
      <div className="editor-title bg-gray-900 text-white text-lg p-2 rounded-t-lg flex items-center justify-center">
        {icon}
      </div>
      <ControlledEditor
        onBeforeChange={(editor, data, value) => handleChange(editor, data, value)}
        value={value}
        className="code-mirror-wrapper flex-1" 
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  );
};

export default Editor;
