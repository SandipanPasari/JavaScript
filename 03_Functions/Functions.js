function saymyname() {
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("D");
  console.log("I");
}
// saymyname();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNumbers(4, 5);
// addTwoNumbers(4, "a");

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
}
// const result = addTwoNumbers(8, 9);
// console.log("Result : ", result);

// function loginuser(username) {
//   if (username === undefined) {
//     console.log("Please enter a username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(loginuser());
// console.log(loginuser("Sandipan"));

function loginuser(username = "sam") {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginuser());