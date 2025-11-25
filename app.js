const express = require("express");
const userController = require("./controllers/user.controller");

const app = express();

app.use(express.json());

app.post("/register", userController.createUser);
app.get("/users", userController.getAllUsers);

module.exports = app;
