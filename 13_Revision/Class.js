let data = "Confidential";

class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data = ", data);
  }
}

class Admin extends user {
  constructor(name, email) {
    super(name, email);
  }
  editdata() {
    data = "Can be edited";
  }
}

let student1 = new user("Sandipan", "abc@gmail.com");
let student2 = new user("Rahul", "abcdef@yahoo.com");

let teacher1 = new user("Rakesh", "RRR@yahoo.com");

let admin1 = new Admin("Admin", "admin@gmail.com");
