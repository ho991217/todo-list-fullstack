import express from "express";

const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.port || 8000;
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "jy219512",
  database: "todolist_db",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CRUD 구현?
app.get();
