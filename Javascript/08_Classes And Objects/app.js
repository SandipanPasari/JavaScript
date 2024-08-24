// const student = {
//   fullName: "Sandipan Pasari",
//   marks: 57,
//   printMarks: function () {
//     console.log("marks = ", this.marks);
//   },
// };

// JS Object have prototype

const employee = {
  calcTax1() {
    console.log("Tax rate is 10%");
  },
  calcTax2: function () {
    console.log("Tax rate is 10%");
  },
};

const KaranArjun = {
  salary: 60000,
};
const KaranArjun2 = {
  salary: 60000,
  calcTax1() {
    console.log("Tax is 20%");
  },
};
const KaranArjun3 = {
  salary: 60000,
};
const KaranArjun4 = {
  salary: 60000,
};
const KaranArjun5 = {
  salary: 60000,
};

KaranArjun.__proto__ = employee;
KaranArjun2.__proto__ = employee;
KaranArjun3.__proto__ = employee;
KaranArjun4.__proto__ = employee;
KaranArjun5.__proto__ = employee;
