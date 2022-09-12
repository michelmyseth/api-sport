const express = require("express");
const mongoose = require("mongoose");
const Usermodel = require("./model/user");

require("dotenv").config();

const app = express();
app.use(express.json());

const port = 3000;
const uri = process.env.DB_SERVER;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully.");
});

app.get("/customerlist", async (req, res) => {
    await Customer.find({}, (err, result) => {
        console.log("customer from db: ", result);
        res.send(result);
    });
});

app.post("/api/register", async (req, res) => {
    try {
        console.log("req.body: ", req.body);

        const newUser = new Usermodel({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        });

        await Usermodel.create(newUser);
        res.send("user added");
    } catch (err) {
        console.log("error: ", err);
    }
});

app.listen(port, () => {
    console.log(`App is listening at http://locahost:${port}`);
});

// require("dotenv").config();
// const { MongoClient } = require("mongodb");
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// app.use(express.json()); // use json
// app.use(express.urlencoded({ extended: true })); // utf8
// const usermodel = require("./model/User");

// mongoose
//     .connect(process.env.DB_SERVER)
//     .then(() => {
//         console.log("connected to db");
//     })
//     .catch((err) => {
//         console.log("data base error" + err);
//     });

// app.post("api/register", async (req, res) => {
//     const newUser = new usermodel(req.body);
//     try {
//         await newUser.save();
//         res.status(200).json({
//             message: "add with successfull",
//         });
//     } catch {
//         res.status(500).json({
//             message: "user was not add",
//         });
//     }
// });

// const user = {
//     id: 30,
//     name: "francois",
//     email: "nnp@gmail.com",
//     admin: true,
// };

// function generateAccessToken(user) {
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: "1800s",
//     });
// }

// function generateRefreshToken(user) {
//     return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
//         expiresIn: "1y",
//     });
// }

// app.post("/api/refreshToken", (req, res) => {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];

//     if (!token) {
//         return res.sendStatus(401);
//     }

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) {
//             return res.sendStatus(401);
//         }
//         //todo check in bdd user still have access is still exist ?
//         delete user.iat;
//         delete user.exp;
//         const refreshedToken = generateAccessToken(user);
//         res.send({
//             accessToken: refreshedToken,
//         });
//     });
// });

// app.get("/", (req, res) => {
//     res.send("oki");
// });

// app.post("/api/login", (req, res) => {
//     //TODO CHECK USER IN BDD WITH EMAIL
//     if (req.body.email !== user.email) {
//         res.status(401).send("invalid email");
//     }
//     if (req.body.password !== "abc") {
//         res.status(401).send("invalid.password");
//     }
//     const accessToken = generateAccessToken(user);
//     const refreshedToken = generateRefreshToken(user);
//     res.send({ accessToken, refreshedToken });
// });

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];

//     if (!token) {
//         return res.sendStatus(401);
//     }

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) {
//             return res.sendStatus(401);
//         }
//         req.user = user;
//         next();
//     });
// }

// app.get("/api/me", authenticateToken, (req, res) => {
//     res.send(req.user);
// });
// app.listen(3000);
