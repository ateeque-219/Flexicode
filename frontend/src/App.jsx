import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Page/Home.jsx';
import CodePlayground from './Page/CodePlayground.jsx'; 
import GeneralCompiler from './Page/GeneralCompiler.jsx'; 


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/code-playground" element={<CodePlayground />} />
          <Route path="/general-compiler" element={<GeneralCompiler />} />
        </Routes>
    </Router>
  );
}

export default App;
