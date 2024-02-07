// index.js
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const CONNECTION_STRING = "mongodb+srv://admin:56oUQZ7BYDh0LkKy@gradecalculator.qfbqzzi.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "gradesappdb";
let database;

app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("Mongo Db connection error:", error);
        } else {
            database = client.db(DATABASE_NAME);
            console.log("Mongo Db connection established");
        }
    });
});

app.get('/api/gradesapp/GetGrades', (request, response) => {
    database.collection("grades").find({}).toArray((error, result) => {
        if (error) {
            console.error("Error fetching data:", error);
            response.status(500).send("Internal Server Error");
        } else {
            response.send(result);
        }
    });
});

app.post('/api/gradesapp/AddGrade', (request, response) => {
    const { studentName, profession, grade } = request.body;
    
    database.collection("grades").insertOne({
        studentName,
        profession,
        grade
    }, (error, result) => {
        if (error) {
            console.error("Error adding grade:", error);
            response.status(500).send("Internal Server Error");
        } else {
            response.json('Grade added successfully');
        }
    });
});

app.delete('/api/gradesapp/DeleteGrade/:id', (request, response) => {
    const id = request.params.id;

    database.collection("grades").deleteOne({
        _id: ObjectId(id)
    }, (error, result) => {
        if (error) {
            console.error("Error deleting grade:", error);
            response.status(500).send("Internal Server Error");
        } else {
            response.json("Grade deleted successfully");
        }
    });
});

app.post('/api/gradesapp/CalculateAverageGrade', (request, response) => {
    const selectedStudent = request.body.selectedStudent;
    
    database.collection("grades").find({ studentName: selectedStudent }).toArray((error, result) => {
        if (error) {
            console.error("Error fetching grades:", error);
            response.status(500).send("Internal Server Error");
        } else {
            const totalGrade = result.reduce((total, grade) => total + parseInt(grade.grade), 0);
            const averageGrade = totalGrade / result.length;
            response.json({ averageGrade });
        }
    });
});

// Route to handle displaying average grade
app.get('/average-grade', (req, res) => {
    // Handle the request here, render the component or perform calculations
    // Return appropriate response or render a template
});

module.exports = app; // Export the app for testing or for use in other modules
