const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse JSON in POST requests
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is GET method");
});

app.post("/post", (req, res) => {
  const { username, password } = req.body;

  // sending username and password using the POST method
  res.json({
    username: username,
    password: password,
    message: "Data sent successfully",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
