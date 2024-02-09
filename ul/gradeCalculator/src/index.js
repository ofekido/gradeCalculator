
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './index.css';
import App from './App';
import AverageGrade from './AverageGrade';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Wrap your routes with <Routes> */}
        <Route path="/" element={<App />} /> {/* Use element prop to specify component */}
        <Route path="/average-grade" element={<AverageGrade />} /> {/* Use element prop to specify component */}
      </Routes>
    </Router>
  </React.StrictMode>
);

