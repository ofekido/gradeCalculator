import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import App from './App';
import AverageGrade from './AverageGrade'; // Import the AverageGrade component

ReactDOM.render(
  <Router>
    <Routes> {/* Wrap your routes with <Routes> */}
      <Route path="/" element={<App />} /> {/* Use element prop to specify component */}
      <Route path="/average-grade" element={<AverageGrade />} /> {/* Use element prop to specify component */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
