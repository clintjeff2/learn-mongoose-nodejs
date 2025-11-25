const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/SchoolDB")
  .then(() => console.log("Connected to DB SchoolDB"))
  .catch((err) => console.log("There was an error connecting to db", err));

app.listen(5000, () =>
  console.log("Server started! Listening to port 5000's request")
);
