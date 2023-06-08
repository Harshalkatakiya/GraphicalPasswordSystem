const bcrypt = require('bcryptjs/dist/bcrypt');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
require('./dbconnection');
const User = require('./userSchema');
const authenticate = require('./authenticate');

router.get('/', (req, res) => {
    res.send(`Home Page Router`);
});

router.post('/signup', async (req, res) => {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
        return res.status(422).json({ error: "Please fill all field." });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist." });
        } else {
            const user = new User({ name, email, phone, password });
            await user.save();
            res.status(201).json({ message: "User registered Successfully." });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the all data." });
        }
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            console.log("Token : ", token);
            res.cookie("gpa", token, {
                expires: new Date(Date.now() + 25892000000), httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "Invalid Details." });
            }
            else {
                res.json({ message: "User LoggedIn successfully." });
            }
        }
        else {
            res.status(400).json({ error: "Invalid Details." });
        }
    } catch (err) {
        console.log(err);
    }
});

router.use(cookieParser());

router.get('/profile', authenticate, (req, res) => {
    res.send(req.rootUser);
});

module.exports = router;