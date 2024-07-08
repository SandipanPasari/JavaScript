const accountID = 14453;
let accountEmail = "Sandi@gmail.com";
var accountPassword = "123";
accountCity = "Kolkata";

// accountID = 2; // constant can't be changed
accountEmail = "Sp@gmail.com";
accountPassword = "4126";
accountCity = "Arambagh";

// console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountCity]);
