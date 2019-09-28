const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('../config/db');

app.use(cors());
app.use(bodyParser.json());

// var mongoDB = 'mongodb+srv://<username>:<password>@workerscluster0-s7bwo.mongodb.net/test?retryWrites=true&w=majority';
connectDB();


app.get('/', (request, response) => {
    response.send('Hello from Express!')
})
app.get('/api', (request, response) => {
    response.send('Hello from API!')
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening+ on ${port}`)
})