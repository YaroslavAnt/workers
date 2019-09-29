const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('../../config/db');
const employees = require('./routes/employees');
const users = require('./routes/users');
app.use(cors());
app.use(bodyParser.json());

connectDB();


app.get('/', (request, response) => {
    response.send('Hello from Express!')
})
app.get('/api', (request, response) => {
    response.send('Hello from API!')
})
app.use('/api/employees', employees);
app.use('/api/users', users);

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening+ on ${port}`)
})