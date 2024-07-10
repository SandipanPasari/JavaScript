const name = "Sandipan";
const count = 50;

// console.log(name + count + "Value");

console.log(`Hello my name is ${name} and my count is ${count}`);

const gameName = new String("Sandipan");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   Sandipan  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudry";
console.log(url.replace("%20","_"));

console.log(url.includes("hitesh"));
console.log(url.includes("teacher"));

const numbs = "Hello_SDE_SWE";
console.log(numbs.split("_"));