let express = require('express');
let app = express();
require('dotenv').config()

console.log()

app.use('/public', express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", (req, res) => {
    const data = {"message": "Hello json"};

    if (process.env.MESSAGE_STYLE === "uppercase") {
        data.message = data.message.toUpperCase();
    }

    res.json(data);
})


module.exports = app;
