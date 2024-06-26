const express = require("express");
const app = express();

app.use((req, res, next) => {
  // defining a middleware function
  console.log(`REQUEST RECEIVED: ${req.method} ${req.url}`);
});

// defining different routes
app.get("/home", (req, res) => {
  res.send("Welcome to home page!!!");
});

app.get("/about", (req, res) => {
  res.send("This is about page of the website");
});

app.get("/contactus", (req, res) => {
  res.send("This is the contact us page");
});

// another middleware function to handle error
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("Error fetching data.");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
