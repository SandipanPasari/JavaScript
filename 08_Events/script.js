let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log("btn was clicked");
//   let a = 24;
//   a++;
//   console.log(a);
// };

btn1.addEventListener("click", () => {
  console.log("button 1 was clicked 1");
});

btn1.addEventListener("click", () => {
  console.log("button 1 was clicked 2");
});

btn1.addEventListener("click", () => {
  console.log("button 1 was clicked 3");
});

btn1.addEventListener("click", () => {
  console.log("button 1 was clicked 4");
});

btn1.removeEventListener("click", () => {
  console.log("button 1 was clicked 3");
});

const btn3 = () => {
  console.log("button was clicked");
};

// let box = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("you are inside div");
// };
