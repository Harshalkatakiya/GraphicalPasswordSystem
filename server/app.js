const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: './config.env' })
require('./dbconnection');
app.use(express.json());
app.use(require('./routerauth'));
const PORT = process.env.PORT;

app.get('/login', (req, res) => {
    res.send(`Login`);
});

app.get('/signup', (req, res) => {
    res.send(`SignUp`);
});

app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}.`)
})