let promise = new Promise((resolve, reject) => {
  console.log("I am a Promise");
  resolve("success");
  reject("Error");
});

function getData(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 3000);
  });
}
 