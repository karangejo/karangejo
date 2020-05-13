const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();


console.log(process.env.DATABASE_URL);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const loginRouter = require("./routes/login");
app.use("/login", loginRouter);

const postRouter = require("./routes/post");
app.use("/post", postRouter);

app.listen(3001, () => console.log("Server Started listening on port 3001"));
