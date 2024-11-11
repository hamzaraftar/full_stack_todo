import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 5000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "todo",
  password: "12345",
  port: "5432",
});
db.connect();

//Middleware
app.use(cors());
app.use(express.json());

//Create todo
app.post("/todo", async (req, res) => {
  try {
    const { title, description } = req.body;
    const data = await db.query(
      "INSERT INTO pern_todo (title,description) VALUES($1,$2) RETURNING *",
      [title, description]
    );
    res.json(data.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Get all todo
app.get("/todo", async (req, res) => {
  try {
    const allTodo = await db.query("SELECT * FROM pern_todo");
    res.json(allTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get singel todo
app.get("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singelTodo = await db.query("SELECT * FROM pern_todo WHERE id = $1", [
      id,
    ]);
    res.json(singelTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//updata todo
app.put("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updataTodo = await db.query(
      "UPDATE  pern_todo SET title = $1 , description = $2 WHERE id = $3",
      [title, description, id]
    );
    res.json("Update successfuy ... ");
  } catch (error) {
    console.error(error.message);
  }
});

// Delete todo
app.delete("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await db.query("DELETE FROM pern_todo  WHERE id = $1", [
      id,
    ]);
    res.json("Delete successfuy ...");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
