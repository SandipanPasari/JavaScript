let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString);
// console.log(typeof myDate);

// let my_created_date = new Date(2024, 7, 12, 5, 2);
// console.log(my_created_date.toLocaleString());

// let my_created_date = new Date("2024-07-20");
// console.log(my_created_date.toLocaleString());

// let my_created_date = new Date("01-14-2024");
// console.log(my_created_date.toLocaleString());

let myTimestrap = Date.now();
// console.log(myTimestrap);
// console.log(my_created_date.getTime());
// console.log(Date.now());

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());

console.log(newDate.toLocaleString("default", { weekday: "long" }));
