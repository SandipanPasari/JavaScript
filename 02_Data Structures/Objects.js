// singletons
// Object.create

// object lietrals

const mySym = Symbol("Key1");

const Jsuser = {
  name: "Sandipan",
  "Full name": "Samdipan Pasari",
  [mySym]: "key1",
  age: 18,
  location: "Armambagh",
  email: "Sandipan@gmail.com",
  isloggesin: false,
  lastLogIn: ["Monday"],
};

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "Xyz@gmail.com";
// Object.freeze(Jsuser);
Jsuser.email = "CCCCC@gmail.com";
console.log(Jsuser)

Jsuser.greeting = function()
{
    console.log("Hellooooo JS User !!");
}
Jsuser.greeting2 = function()
{
    console.log(`Hellooooo JS User !!, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());
Jsuser.greeting();