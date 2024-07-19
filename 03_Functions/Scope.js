let a = 600;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log("Inner : ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Sandipan";

  function two() {
    const website = " Youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
one();

if (true) {
  const username = "Sandipan";
  if (username === "Sandipan") {
    const website = "youtube";
    console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

//************** interesting ****************

function addone(num) {
  return num + 1;
}

function addone(num) {
  return num + 1;
}
console.log(addone(5));

const addtwo = function (num) {
  return num + 2;
};
addtwo(5);
console.log(addtwo(5))