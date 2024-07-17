// const tinderUser = new Object() // Singleton object
const tinderUser = {};
tinderUser.id = "1245465485";
tinderUser.name = "Sandi";
tinderUser.isloggedin = false;

// console.log(tinderUser);

const regularUser = {
  email: "SandipanPasari@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sandipan",
      lastname: "Pasari",
    },
  },
};

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isloggedin"));
