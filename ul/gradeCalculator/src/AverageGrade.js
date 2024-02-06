// AverageGrade.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Header from './Header'; // Import Header component
import './styles.css'; // Import styles for consistent styling

const AverageGrade = () => {
    const params = new URLSearchParams(window.location.search);
    const averageGrade = params.get('averageGrade');

    return (
        <div className="average-grade-container">
            <Header /> {/* Include the Header component */}
            <div className="content">
                <h2>Average Grade</h2>
                <p>The average grade for the selected student is: {averageGrade}</p>
                <Link to="/">Back</Link> {/* Use Link component for navigation */}
            </div>
            {/* Footer */}
            <footer className="footer">
                <p>&copy; Ido and David</p>
            </footer>
        </div>
    );
}

export default AverageGrade;
