// AverageGrade.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const AverageGrade = () => {
    const params = new URLSearchParams(window.location.search);
    const averageGrade = params.get('averageGrade');

    return (
        <div>
            <h2>Average Grade</h2>
            <p>The average grade for the selected student is: {averageGrade}</p>
            <Link to="/">Back</Link> {/* Use Link component for navigation */}
        </div>
    );
}

export default AverageGrade;
