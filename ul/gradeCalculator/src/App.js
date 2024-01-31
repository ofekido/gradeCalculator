// App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './styles.css';
import AverageGrade from './AverageGrade';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grades: [],
            studentName: '',
            profession: '',
            grade: '',
            selectedStudent: '',
            suggestedGrade: ''
        };
    }

    componentDidMount() {
        this.refreshGrades();
    }

    async refreshGrades() {
        fetch("http://localhost:5038/api/gradesapp/GetGrades")
            .then(response => response.json())
            .then(data => {
                this.setState({ grades: data });
            });
    }

    async addGrade() {
        const { studentName, profession, grade } = this.state;
        const data = { studentName, profession, grade };

        fetch("http://localhost:5038/api/gradesapp/AddGrade", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert(result);
            this.refreshGrades();
        });
    }

    async deleteGrade(id) {
        fetch(`http://localhost:5038/api/gradesapp/DeleteGrade/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(result => {
            alert(result);
            this.refreshGrades();
        });
    }

    async calculateGrade() {
        const { selectedStudent } = this.state;

        fetch("http://localhost:5038/api/gradesapp/CalculateAverageGrade", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ selectedStudent })
        })
        .then(response => response.json())
        .then(result => {
            window.location.href = `/average-grade?averageGrade=${result.averageGrade}`;
        })
        .catch(error => {
            console.error("Error calculating average grade:", error);
            alert("Error calculating average grade. Please try again.");
        });
    }

    render() {
        const { grades, studentName, profession, grade, selectedStudent } = this.state;

        const studentNames = [...new Set(grades.map(grade => grade.studentName))];

        return (
            <div className="App">
                <h2>Calculating Your Grades</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Student Name"
                        value={studentName}
                        onChange={e => this.setState({ studentName: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Profession"
                        value={profession}
                        onChange={e => this.setState({ profession: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Grade"
                        value={grade}
                        onChange={e => this.setState({ grade: e.target.value })}
                    />
                    <button onClick={() => this.addGrade()}>Add Grade</button>
                </div>
                <div>
                    <select value={selectedStudent} onChange={e => this.setState({ selectedStudent: e.target.value })}>
                        <option value="">Select Student</option>
                        {studentNames.map(name => <option key={name} value={name}>{name}</option>)}
                    </select>
                    <button onClick={() => this.calculateGrade()}>Calculate</button>
                </div>
                <ul>
                    {grades.map(grade => (
                        <li key={grade._id}>
                            <b>Student Name:</b> {grade.studentName}, <b>Profession:</b> {grade.profession}, <b>Grade:</b> {grade.grade}
                            <button onClick={() => this.deleteGrade(grade._id)}>Delete Grade</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
