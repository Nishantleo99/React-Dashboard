/*
Author: Nishant Kumar

Description: This is the main server file written in Node.js. All the necessary libraries needed for all the operations are
             imported below. The port used for handling the backend services is 8080.

 Note: 1. Concurrently is used for running multiple commands in a single terminal. For running this project simply type "npm run both"
          without the quotation marks in the terminal.
       2. The frontend server will run on "http://localhost:3000", for the backend data to connect to the frontend, a proxy has been
          defined in the package.json in the client folder(frontend).                
*/

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dashc', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT,console.log(`Server is  starting at ${PORT}`));