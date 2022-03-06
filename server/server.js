const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.port || 8000;
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "ho991217",
  password: "jy219512",
  database: "todolist_db",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CRUD 구현?
app.get("/api/get", (req, res) => {
  const sqlQuery = "SELECT * FROM todo;";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/insert", (req, res) => {
  const id = req.body.id;
  //   res.send("id:", id);
  const completed = req.body.completed;
  //   res.send("completes:", completed);
  const todoName = req.body.todoName;
  //   res.send("todoName:", todoName);
  const sqlQuery =
    "INSERT INTO todo (id, completed, todo_name) VALUES (?, ?, ?)";
  db.query(sqlQuery, [id, completed, todoName], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("succesful");
    }
  });
});

app.listen(PORT, (req, res) => {
  console.log(`server on port ${PORT}`);
});
