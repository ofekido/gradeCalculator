# Grade Calculator App(this web app is deployed using render)

The Grade Calculator App is a web application built using Express.js, React, and MongoDB. It allows users to manage and calculate students GPA.

## Features

- Add, delete, and view grades for students.
- Calculate average grade for a selected student.

## Technologies Used

- Express.js
- React
- MongoDB

## Installation

Downlaod and install nodejs from nodejs.org

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ofekido/gradeCalculator.git
   
   ```
2. **Install dependencies for the server:(react/express etc):**
   
   navigate to the directory of the project and then to the api module.
   ```bash
   cd ../api
   npm install
   ```
   3.**Install dependencies for the client:**
      ```bash
      cd ../gradeCalculator
      npm install
      ```
## Set up MongoDB Atlas:

   Create a MongoDB Atlas cluster.
   Replace the CONNECTION_STRING in index.js with your MongoDB connection string.
   Deployment on render.com
   Create an account on render.com if you haven't already:
   
   Sign up at https://render.com

## Deploy the server:

Navigate to your render.com dashboard and create a new web service. Choose your GitHub repository and select the branch you want to deploy.

## Client Experience
Usage Add new grades by entering student name, profession, and grade in the input fields and clicking the "Add Grade" button. Delete grades by clicking the "Delete" button next to the grade. Calculate the average grade for a selected student by choosing the student from the dropdown menu and clicking the "Calculate" button.



