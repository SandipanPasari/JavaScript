class ToyotaCar {
  constructor(brand, milage) {
    console.log("creating new object");
    this.brand = brand;
    this.milage = milage;
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new ToyotaCar("fortuner", 15);
fortuner.setBrand = "fortuner";
console.log(fortuner);

let lexus = new ToyotaCar("lexus", 45);
lexus.setBrand = "Lexus";
console.log(lexus);
