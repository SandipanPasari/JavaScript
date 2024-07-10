// Stack (Primitive), Heap (Non Primitive)

let myYoutube = "ChaiAurCode";
let anotherName = myYoutube;
anotherName = "English";

console.log(myYoutube);
console.log(anotherName);

let user1 = {
  email: "user@gmail.com",
  UPI: 51655132,
};

let user2 = user1;
user2.email = "Sandi@gmail.com";
console.log(user1.email);
console.log(user2.email);