// AverageGrade.js

import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './styles.css'; // Import the main styles.css file
import './AverageGrade.css'; // Import the new AverageGrade.css file
import averageFormula from './Average-Formula.jpg';

const AverageGrade = () => {
    const params = new URLSearchParams(window.location.search);
    const averageGrade = params.get('averageGrade');
    const studentName = params.get('selectedStudent');

    return (
        <div>
            <Header />
            <div className="average-grade-container">
                <div className="content">
                    <h2>Average Grade</h2>
                    <p>Hello {studentName}, your average grade is {averageGrade}.</p>
                    <Link to="/" className="back-link">Back</Link>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; Ido and David</p>
            </footer>
            <div className="explanation">
                <h3>How to Calculate Grade Average</h3>
                <p>To calculate the grade average, you add up all the grades and then divide the sum by the number of grades. This method is similar to calculating any other type of average.</p>
                <img src={averageFormula} alt="Explanation Image" />
            </div>
        </div>
    );
}

export default AverageGrade;
