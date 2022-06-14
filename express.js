// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   //   res.send("Hello World!");
//   res.sendFile("Index.html", { root: __dirname });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   //   res.send("Hello World!");
//   res.sendFile("Index.html", { root: __dirname });
// });

// app.get("/products", (req, res) => {
//   var products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "LED TV" },
//   ];

//   res.json(products);
// });
// app.get("/courses", (req, res) => {
//   var courses = [
//     {
//       id: 1,
//       title: "React",
//       price: 200000,
//       rating: "5 star",
//       likes: 2000,
//       imgURL: "./assests/img-1.jpg",
//     },
//     {
//       id: 2,
//       title: "angular",
//       price: 200000,
//       rating: "4 star",
//       likes: 1000,
//       imgURL: "./assests/img-1.jpg",
//     },
//     {
//       id: 3,
//       title: "vue",
//       price: 200000,
//       rating: "4 star",
//       likes: 3000,
//       imgURL: "./assests/img-1.jpg",
//     },
//     {
//       id: 4,
//       title: "node",
//       price: 200000,
//       rating: "2 star",
//       likes: 4000,
//       imgURL: "./assests/img-1.jpg",
//     },
//     {
//       id: 5,
//       title: "nextjs",
//       price: 200000,
//       rating: "1 star",
//       likes: 5000,
//       imgURL: "./assests/img-1.jpg",
//     },
//   ];
//   res.json(courses);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

var courses = require("./models/courses.model");

app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile("Courses.html", { root: __dirname });
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.post("/newcourse", (req, res) => {
  let newcourse = req.body;
  courses = [...courses, newcourse]; // || push()
  res.json({ msg: "success" });
});

app.delete("/courses/:id", (req, res) => {
  let theCourseId = +req.params.id;
  console.log("Deleting course from server : ", theCourseId);

  // db interaction
  courses = courses.filter((course) => course.id != theCourseId); // Immutability
  console.log(courses);
  res.json({ msg: "success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
