const express = require("express");
const app = express();
var cors = require("cors");

const mysql = require("mysql2");
app.listen(3000, () => {
    console.log("serveur runnning");
});

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "api",
});

app.use(cors());

app.get("/app", (req, res) => {
    db.query(
        'INSERT INTO users (name, password,role) VALUES ("michel","qwewq","structure")',
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.post("/register", (req, res) => {
    console.log("test");
    console.log(req.body);
    db.query(
        'INSERT INTO users (user_mail, user_password, user_role, user_active) VALUES ("michel","qwewq","partner","TRUE")',
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});
