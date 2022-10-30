import express from "express";
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
