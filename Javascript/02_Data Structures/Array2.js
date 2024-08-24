const Indian_heros = ["Virat", "Rohit", "Dhoni"];
const Aus_heros = ["Smith", "Warner", "Maxi"];

// Indian_heros.push(Aus_heros);
// console.log(Indian_heros);

const all_heros = Indian_heros.concat(Aus_heros);
console.log(all_heros);

const all_new_heros = [...Indian_heros, ...Aus_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Sandipan"));
console.log(Array.from("Sandipan"));

console.log(Array.from({ name: "Sandipan" }));

let score1 = 100;
let score2 = 300;
let score3 = 600;
console.log(Array.of(score1, score2, score3));
