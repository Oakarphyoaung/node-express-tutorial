const express = require("express");
const app = express();
const port = 3000;

const users = [
  {
    name: "ok",
    email: "ok@gmail.com",
    age: "25",
  },
  {
    name: "ok2",
    email: "ok2@gmail.com",
    age: "26",
  },
];

app.use(express.static("public"));
app.use(express.json());

app.post("/users",(req,res) => {
  const dataFromScript = req.body;
  const isEmailexit = users.find((user) => user.email === dataFromScript.email);
  if (isEmailexit) {
    
    throw new Error("Email already exit!");
  }
  users.push(dataFromScript);
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.delete("/users/:id", (req, res) => {
  const idToDelete = parseInt(req.params.id, 10);
  const remainUsers = users.filter((user) => user.id !== idToDelete);
  res.send(remainUsers);
});

app.listen(port, () => {
  console.log(`Example app is port ${port}`);
});
