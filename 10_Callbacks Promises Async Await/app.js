console.log("one");
console.log("two");
setTimeout(() => {
  console.log("Hello");
}, 4000);
console.log("three");
console.log("four");

//******** Callbacks *********

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum);

const hello = () => {
  console.log("hello");
};
setTimeout(hello, 3000);

function getData(dataID, getNextData) {
  setTimeout(() => {
    console.log("data", dataID);
    getNextData();
  }, 3000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
