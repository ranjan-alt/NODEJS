// const cardList = document.querySelector("#card-list");

// async function LoadPosts() {
//   var result = await fetch("http://localhost:3000/courses");
//   let data = await result.json();
//   let cards = data;
//   let coursecarditem = "";
//   cards = cards.map((item) => {
//     try {
//       console.log(item);
//       coursecarditem += ` <div class="cards">
//         <div class="card-img"><img src=${
//           item.imageUrl
//         }  height="100px" width="100px"  alt=""> </div>
//         <div class="star">
//         <span class="fa fa-star" ${item.rating >= 1 ? "checked" : ""}"</span>
//         <span class="fa fa-star" ${item.rating >= 2 ? "checked" : ""}"</span>
//         <span class="fa fa-star" ${item.rating >= 3 ? "checked" : ""}"</span>
//         <span class="fa fa-star" ${item.rating >= 4 ? "checked" : ""}"</span>
//         <span class="fa fa-star" ${item.rating >= 5 ? "checked" : ""}"</span>
//         </div>
//         <div class="courses">
//           <span>${item.title}</span>
//           <span>${item.price}</span>
//           <button class="likes">${
//             courses.likes
//           }<i class="fa fa-thumbs-up"></i></button>

//         </div>
//       </div>`;
//     } catch (err) {
//       console.log(err);
//     }
//   });
//   cardList.innerHTML = coursecarditem;
//   //   return cards;
// }
// LoadPosts();
// =====================================
// // trainers code
// function FetchCourses() {
//   return fetch("http://localhost:3000/courses").then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Something went wrong !");
//     }
//   });
// }

// async function DisplayCourses() {
//   let allCourses = await FetchCourses();
//   for (const course of allCourses) {
//     CourseCardItem(course);
//   }
// }

// window.addEventListener("DOMContentLoaded", DisplayCourses);

// function CourseCardItem(course) {
//   let courseItem = document.createElement("div");
//   courseItem.setAttribute("class", "col-md-3");

//   let courseCard = document.createElement("div");
//   courseCard.setAttribute("class", "card m-1 p-2");

//   let courseImage = document.createElement("img");
//   courseImage.setAttribute("src", course.imageUrl);
//   courseImage.setAttribute("alt", course.title);
//   courseImage.setAttribute("height", "150px");

//   courseImage.setAttribute("class", "card-img-top");

//   courseCard.append(courseImage);

//   let courseCardBody = document.createElement("div");
//   courseCardBody.setAttribute("class", "card-body");

//   let courseRating = document.createElement("div");

//   for (i = 0; i < course.rating; i++) {
//     courseRating.innerHTML +=
//       '<span style="color: orange;" > <i class="fas fa-star"></i></span>';
//   }

//   courseCardBody.appendChild(courseRating);

//   // title
//   let courseTitle = document.createElement("h5");
//   courseTitle.setAttribute("class", "card-title");
//   courseTitle.innerHTML = course.title;
//   courseCardBody.append(courseTitle);
//   //price
//   let coursePrice = document.createElement("h5");
//   coursePrice.setAttribute("class", "card-text");
//   coursePrice.innerHTML += "₹." + course.price;
//   courseCardBody.append(coursePrice);

//   // likes
//   let courseLikes = document.createElement("button");
//   courseLikes.setAttribute("class", "btn btn-primary");
//   courseLikes.innerHTML = course.likes;

//   // let courseLikesIcon = document.createElement('i');
//   // courseLikesIcon.setAttribute('class', 'far fa-thumbs-up');
//   courseLikes.innerHTML += '<i class="far fa-thumbs-up"></i>';

//   // delete
//   let courseDelete = document.createElement("button");
//   courseDelete.setAttribute("class", "btn btn-danger mx-1");
//   courseDelete.setAttribute("id", course.id);

//   courseDelete.innerHTML = '<i class="fa fa-trash"></i>';
//   // courseDelete.addEventListener("click", DeleteACourse.bind(null, course.id));
//   courseDelete.addEventListener("click", () => DeleteACourse(course.id));

//   courseCardBody.append(courseLikes);
//   courseCardBody.append(courseDelete);

//   courseCard.append(courseCardBody);
//   courseItem.append(courseCard);
//   document.querySelector(".courselist").appendChild(courseItem);
// }

// function DeleteACourse(theCourseId) {
//   console.log("Deleting course..", theCourseId);
// }
// function FetchCourses() {
//   return fetch("http://localhost:3000/courses").then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Something went wrong !");
//     }
//   });
// }

// async function DisplayCourses() {
//   let allCourses = await FetchCourses();
//   for (const course of allCourses) {
//     CourseCardItem(course);
//   }
// }

// window.addEventListener("DOMContentLoaded", DisplayCourses);

// function CourseCardItem(course) {
//   let courseItem = document.createElement("div");
//   courseItem.setAttribute("class", "col-md-3");

//   let courseCard = document.createElement("div");
//   courseCard.setAttribute("class", "card m-1 p-2");

//   let courseImage = document.createElement("img");
//   courseImage.setAttribute("src", course.imageUrl);
//   courseImage.setAttribute("alt", course.title);
//   courseImage.setAttribute("height", "150px");

//   courseImage.setAttribute("class", "card-img-top");

//   courseCard.append(courseImage);

//   let courseCardBody = document.createElement("div");
//   courseCardBody.setAttribute("class", "card-body");

//   let courseRating = document.createElement("div");

//   for (i = 0; i < course.rating; i++) {
//     courseRating.innerHTML +=
//       '<span style="color: orange;" > <i class="fas fa-star"></i></span>';
//   }

//   courseCardBody.appendChild(courseRating);

//   // title
//   let courseTitle = document.createElement("h5");
//   courseTitle.setAttribute("class", "card-title");
//   courseTitle.innerHTML = course.title;
//   courseCardBody.append(courseTitle);
//   //price
//   let coursePrice = document.createElement("h5");
//   coursePrice.setAttribute("class", "card-text");
//   coursePrice.innerHTML += "₹." + course.price;
//   courseCardBody.append(coursePrice);

//   // likes
//   let courseLikes = document.createElement("button");
//   courseLikes.setAttribute("class", "btn btn-primary");
//   courseLikes.innerHTML = course.likes;

//   // let courseLikesIcon = document.createElement('i');
//   // courseLikesIcon.setAttribute('class', 'far fa-thumbs-up');
//   courseLikes.innerHTML += '<i class="far fa-thumbs-up"></i>';

//   // delete
//   let courseDelete = document.createElement("button");
//   courseDelete.setAttribute("class", "btn btn-danger mx-1");
//   courseDelete.setAttribute("id", course.id);

//   courseDelete.innerHTML = '<i class="fa fa-trash"></i>';
//   // courseDelete.addEventListener("click", DeleteACourse.bind(null, course.id));
//   courseDelete.addEventListener("click", () => DeleteACourse(course.id));

//   courseCardBody.append(courseLikes);
//   courseCardBody.append(courseDelete);

//   courseCard.append(courseCardBody);
//   courseItem.append(courseCard);
//   document.querySelector(".courselist").appendChild(courseItem);
// }

// function DeleteACourse(theCourseId) {
//   // console.log("Deleting course..", theCourseId);

//   fetch(`/courses/${theCourseId}`, { method: "DELETE" })
//     .then((res) => res.json())
//     .then((message) => console.log(message));
//   var element = document.getElementById(theCourseId);
//   element.remove(element);
// }
// =========================================
function FetchCourses() {
  return fetch("http://localhost:3000/courses").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong !");
    }
  });
}

async function DisplayCourses() {
  let allCourses = await FetchCourses();
  for (const course of allCourses) {
    CourseCardItem(course);
  }
}

window.addEventListener("DOMContentLoaded", DisplayCourses);

function CourseCardItem(course) {
  let courseItem = document.createElement("div");
  courseItem.setAttribute("class", "col-md-3");
  courseItem.setAttribute("id", course.id);

  let courseCard = document.createElement("div");
  courseCard.setAttribute("class", "card m-1 p-2");

  let courseImage = document.createElement("img");
  courseImage.setAttribute("src", course.imageUrl);
  courseImage.setAttribute("alt", course.title);
  courseImage.setAttribute("height", "150px");

  courseImage.setAttribute("class", "card-img-top");

  courseCard.append(courseImage);

  let courseCardBody = document.createElement("div");
  courseCardBody.setAttribute("class", "card-body");

  let courseRating = document.createElement("div");

  for (i = 0; i < course.rating; i++) {
    courseRating.innerHTML +=
      '<span style="color: orange;" > <i class="fas fa-star"></i></span>';
  }

  courseCardBody.appendChild(courseRating);

  // title
  let courseTitle = document.createElement("h5");
  courseTitle.setAttribute("class", "card-title");
  courseTitle.innerHTML = course.title;
  courseCardBody.append(courseTitle);
  //price
  let coursePrice = document.createElement("h5");
  coursePrice.setAttribute("class", "card-text");
  coursePrice.innerHTML += "₹." + course.price;
  courseCardBody.append(coursePrice);

  // likes
  let courseLikes = document.createElement("button");
  courseLikes.setAttribute("class", "btn btn-primary");
  courseLikes.innerHTML = course.likes;

  // let courseLikesIcon = document.createElement('i');
  // courseLikesIcon.setAttribute('class', 'far fa-thumbs-up');
  courseLikes.innerHTML += '<i class="far fa-thumbs-up"></i>';

  // delete
  let courseDelete = document.createElement("button");
  courseDelete.setAttribute("class", "btn btn-danger mx-1");

  courseDelete.innerHTML = '<i class="fa fa-trash"></i>';
  // courseDelete.addEventListener("click", DeleteACourse.bind(null, course.id));
  courseDelete.addEventListener("click", () => DeleteACourse(course.id));

  courseCardBody.append(courseLikes);
  courseCardBody.append(courseDelete);

  courseCard.append(courseCardBody);
  courseItem.append(courseCard);
  document.querySelector(".courselist").appendChild(courseItem);
}

function DeleteACourse(theCourseId) {
  // console.log("Deleting course..", theCourseId);

  fetch(`/courses/${theCourseId}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((message) => {
      // SPA (do not refresh !)
      if (message.msg === "success") {
        let theCourseToBeDeleted = document.getElementById(theCourseId);
        theCourseToBeDeleted.remove();
      }

      // refreshing the page
      // if (message.msg === "success") {
      //   window.location.href = "/";
      // }
    });
}
