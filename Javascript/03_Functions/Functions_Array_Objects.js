function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 5000, 145));

const user = {
  username: "Sandipan",
  price: 99,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handleObject(user);

handleObject({
  username: "Sam",
  price: 399,
});

const myNewArray = [200, 400, 500, 700];
function returnSecondValue(myNewArray) {
  return myNewArray[1];
}
console.log(returnSecondValue(myNewArray));