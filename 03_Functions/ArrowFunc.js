const user = {
  username: "Sandipan",
  price: 999,

  welcomeMsg: function () {
    console.log(`${this.username}, welcome here!!`);
    // console.log(this);
  },
};

// user.welcomeMsg();
// user.username = "Shyam";
// user.welcomeMsg();

// function chai() {
//   let username = "chai";
//   console.log(this.username);
// }
// chai();

const chai = () => {
  let username = "chai";
  console.log(this.username);
};
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(8, 9));

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(8, 9));

const addTwo2 = (num1, num2) => (num1 + num2);
console.log(addTwo(8, 9));
