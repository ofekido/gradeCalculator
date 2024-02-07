// AverageGrade.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Header from './Header'; // Import Header component
import './styles.css'; // Import styles for consistent styling
import averageFormula from './Average-Formula.jpg'; // Import the image from your folder

const AverageGrade = () => {
    const params = new URLSearchParams(window.location.search);
    const averageGrade = params.get('averageGrade');

    return (
        <div>
            <Header /> {/* Include the Header component */}
            <div className="average-grade-container">
                <div className="content">
                    <h2>Average Grade</h2>
                    <p>The average grade for the selected student is: {averageGrade}</p>
                    <Link to="/">Back</Link> {/* Use Link component for navigation */}
                </div>
            </div>
            {/* Footer */}
            <footer className="footer">
                <p>&copy; Ido and David</p>
            </footer>
            {/* Explanation */}
            <div className="explanation">
                <h3>How to Calculate Grade Average</h3>
                <p>To calculate the grade average, you add up all the grades and then divide the sum by the number of grades. This method is similar to calculating any other type of average.</p>
                {/* Add the imported image */}
                <img src={averageFormula} alt="Explanation Image" />
            </div>
        </div>
    );
}

export default AverageGrade;
