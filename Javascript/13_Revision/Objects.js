// ********** Object Literals ***********

var car1 = {
  name: "Honda",
  fuelCapacity: 55,
  isAutomatic: false,
  greetMe: function () {
    console.log("Hello bro");
  },
};

console.log(car1.greetMe());

var car2 = {
  name: "Kia",
  fuelCapacity: 59,
  isAutomatic: true,
};

console.log(car1);
console.log(car2);

console.log(car1.name);
console.log(car2.isAutomatic);

car1.color = "Red";
console.log(car1);

console.log(car1["fuelCapacity"]);
console.log(car2["fuelCapacity"]);

// ********* Oject using new keyword **********

// var myDetail = {
//   name: "Sandipan Pasari",
//   title: "Aspiring Software Engineer",
//   expertise: ["#python", "#c++", "#c"],
//   followers: 600,
// };

var myDetail = new Object();
myDetail.name = "Sandipan Pasari";
myDetail.title = "Aspiring Software Engineer";
myDetail.expertise = ["#python", "#c++", "#c"];
myDetail.followers = 600;
myDetail.greetMe = function () {
  console.log("Hello bro");
};

console.log(myDetail);

// ********** Using Constructor ***********

// {
//   instructor: "Sandipan",
//   title: "JS",
//   description: "JS course",
//   duration: 10,
// };

function Course (instructor, title, description, language, fees) 
{
  this.instructor = instructor;
  this.title = title;
  this.description = description;
  this.language = language;
  this.fees = fees;
}

var JavaScriptCourse = new Course("Sandipan", "JS", "jS course", "hinglish", "10");

console.log(JavaScriptCourse);
