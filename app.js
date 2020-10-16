const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


app.get('/', (req, res) => {
    res.send('We are on Home');
});



mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true},(error) => {
    if(!error) {
        console.log('success connected!');
    } else {
        console.log("error");
    }
});


app.listen(3000, () => {
    console.log("server started");
});
