// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function (){}

// userEmail = "Sandi@gamil.com";
// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
