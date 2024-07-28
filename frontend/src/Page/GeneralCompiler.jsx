import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
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
            <FormControl
              variant="outlined"
              sx={{
                backgroundColor: 'gray.700',
                border: '1px solid gray',
                borderRadius: '4px',
                color: 'white',
                '& .MuiInputLabel-root': {
                  color: 'white'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'gray'
                  },
                  '&:hover fieldset': {
                    borderColor: 'white'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white'
                  },
                  '& .MuiSelect-icon': {
                    color: 'white'
                  }
                }
              }}
            >
              <InputLabel>Language</InputLabel>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                label="Language"
                sx={{ color: 'white' }}
              >
                <MenuItem value="javascript">JavaScript</MenuItem>
                <MenuItem value="typescript">TypeScript</MenuItem>
                <MenuItem value="python">Python</MenuItem>
                <MenuItem value="java">Java</MenuItem>
                <MenuItem value="csharp">C#</MenuItem>
                <MenuItem value="cpp">C++</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{
                backgroundColor: 'gray.700',
                border: '1px solid gray',
                borderRadius: '4px',
                color: 'white',
                '& .MuiInputLabel-root': {
                  color: 'white'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'gray'
                  },
                  '&:hover fieldset': {
                    borderColor: 'white'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white'
                  },
                  '& .MuiSelect-icon': {
                    color: 'white'
                  }
                }
              }}
            >
              <InputLabel>Theme</InputLabel>
              <Select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                label="Theme"
                sx={{ color: 'white' }}
              >
                <MenuItem value="vs-dark">Dark</MenuItem>
                <MenuItem value="light">Light</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{
                backgroundColor: 'gray.700',
                border: '1px solid gray',
                borderRadius: '4px',
                color: 'white',
                '& .MuiInputLabel-root': {
                  color: 'white'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'gray'
                  },
                  '&:hover fieldset': {
                    borderColor: 'white'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white'
                  },
                  '& .MuiSelect-icon': {
                    color: 'white'
                  }
                }
              }}
            >
              <InputLabel>Font Size</InputLabel>
              <Select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                label="Font Size"
                sx={{ color: 'white' }}
              >
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Editor
            height="75vh"
            language={language}
            value={code}
            theme={theme}
            options={{ fontSize: fontSize }}
            onChange={(value) => setCode(value)}
          />
        </div>
        <div className="w-1/3 p-4 flex flex-col space-y-4">
          <Button
            onClick={handleRun}
            variant="contained"
            startIcon={<PlayArrowIcon />}
            className="bg-green-600 hover:bg-green-700 text-white w-full mb-2"
          >
            Run
          </Button>
          <Box className="flex-1 mb-2">
            <textarea
              className="w-full h-48 p-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Input"
            />
          </Box>
          <Box className="flex-1">
            <textarea
              className="w-full h-48 p-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-500"
              value={output}
              readOnly
              placeholder="Output"
            />
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default GeneralCompiler;
