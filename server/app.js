const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.send("oki");
});

mongoose.connect(
    "mongodb+srv://michel:Password123@apiexpress.uv6fihn.mongodb.net/?retryWrites=true&w=majority",
    () => {
        console.log("connect to DB");
    }
);

app.listen(3000);
