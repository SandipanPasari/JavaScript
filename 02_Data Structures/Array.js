const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[0]);

// A shallow copy is a process of creating a new collection (such as an object or an array) that shares the structure with the original collection.

// A deep copy, on the other hand, creates a completely independent copy of the original collection.

const myHeros = ["Virat Kohli", "MS Dhoni"];
// console.log(myHeros);

// myArr.push(5);
// myArr.push(2);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(2));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
