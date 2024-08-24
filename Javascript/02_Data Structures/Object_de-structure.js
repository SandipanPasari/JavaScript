const course = {
  coursename: "js in hinglish",
  price: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor

const { courseInstructor: teacher } = course;
// console.log(courseInstructor);
console.log(teacher);

// de-Structuring
// const navbar = ({ company }) => {};
// navbar((company = "hitesh"));
