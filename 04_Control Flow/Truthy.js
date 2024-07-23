const userEmail = "Sandipan@gmail.com";
if (userEmail) {
  console.log("Got the user Email");
} else {
  console.log("Don't got the user email");
}
const userEmail2 = "";
if (userEmail2) {
  console.log("Got the user Email");
} else {
  console.log("Don't got the user email");
}

// Nullish Coalesing operator(??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 60;

console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80");
