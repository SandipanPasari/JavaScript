let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  //   console.log("You are trying to switch mode");
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
  } else {
    currMode = "light";
    body.classList.add("light");
  }
  console.log(currMode);
});
