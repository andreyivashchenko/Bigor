import express from "express";
import cors from "cors";
import * as path from "path";
import * as fs from "fs";

const PORT = 5000;

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });
app.use(cors());

app.get("/", (req, res) => {
  fs.readFile("./courses/courses_list.json", (err, data) => {
    if (err) throw err;
    let courses = JSON.parse(data);
    res.json(courses);
  });
});

let id;
let name;
let coursePath;
app.post("/Courses", urlencodedParser, (req, res) => {
  try {
    id = req.body.id;
    name = req.body.name;
    coursePath = path.format({
      root: "./courses/",
      base: "course_" + `${req.body.id}` + ".json",
    });
    console.log(coursePath);
  } catch (e) {}
});

app.get("/Courses", (req, res) => {
  // fs.readFile("./courses/course_1.txt", "utf-8", (err, data) => {
  //   if (err) throw err;
  //   console.log(data);
  //   res.send(Buffer.from(data));
  // });
  fs.readFile(coursePath, (err, data) => {
    if (err) throw err;
    let courseContent = JSON.parse(data);
    res.json(courseContent);
  });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
