// class Parent {
//   hello() {
//     console.log("hello");
//   }
// }

// class Child extends Parent {}

// let object = Child();

class Person {
    constructor () {
        this.species = "homo sapiens"
    }
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
  work() {
    console.log("Do nothing");
  }
}

class Engineer extends Person {
  work() {
    console.log("Solve");
  }
}

class Doctor extends Person {
  work() {
    console.log("Treat");
  }
}

let sandipanObj = new Engineer();
