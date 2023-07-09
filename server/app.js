const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
dotenv.config({ path: './config.env' })
require('./dbconnection');
app.use(express.json());
app.use(require('./routerauth'));
const PORT = process.env.PORT;

app.get('/login', cors({ origin: 'https://graphical-password-system.vercel.app/' }), (req, res) => {
    res.send(`Login`);
});

app.get('/signup', cors({ origin: 'https://graphical-password-system.vercel.app/' }), (req, res) => {
    res.send(`SignUp`);
});

app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}.`)
})