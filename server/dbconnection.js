const DB = process.env.DATABASE;
const mongoose = require('mongoose');

mongoose.connect(DB).then(() => {
    console.log(`DataBase Connected Successfully.`);
}).catch((err) => console.log("DataBase does not Connected."));