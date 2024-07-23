// if

const isUserLoggedIn = true;

// if (2 != 3) {
//   console.log("Executed");
// }

// const temp = 41;
// if (temp < 50) {
//   console.log("Temperature is less than 50");
// } else {
//   console.log("Temp is greater than 50");
// }
// console.log("Execute");

// <, >, <=, >=, ==, !=, ===

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User Power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000;
// if (balance > 500){
//     console.log("Test");
// }

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedin = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggerdInFromEmail = true;

if (userLoggedin && debitCard) {
  console.log("Allow to buy chai");
}

if (loggedInFromGoogle || loggerdInFromEmail) {
  console.log("User logged in");
}

const month = 3;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
default:
    console.log("Dec");
    break;
}
