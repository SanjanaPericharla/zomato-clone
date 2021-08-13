const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const resRoutes = require('./Routes/Router');   // importing routes from routes file

const hostname = 'localhost';
const port = 6504;

const app = express();

app.use(bodyParser.text());    // applying body-parser as middleware to parse JSON requests 


// handling CORS - Cross Origin Resource Sharing Issue
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// navigating all requests to routes
app.use('/api', resRoutes);

// connect to mongo DB instance of atlas
mongoose.connect('mongodb+srv://testDB:Sanju@12390@cluster0.94xpr.mongodb.net/testDB?retryWrites=true&w=majority',
{ useNewUrlParser: true , useUnifiedTopology: true }

).then(client => {
    app.listen(port,hostname,() => {
        console.log(`server running at http://${hostname}:${port}/`);
    });
}).catch(err => {
    console.log(err);
})