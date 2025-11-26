const express = require("express");
const userController = require("./controllers/user.controller");

const app = express();

app.use(express.json());

app.post("/register", userController.createUser);
app.get("/users", userController.getAllUsers);
app.get("/users/:id", userController.getUser);
app.patch("/users/:id", userController.updateUser);
app.post("/user-level", userController.getByLevel);
app.post("/user-gender", userController.getByGender);

module.exports = app;


// https://github.com/clintjeff2