let obj = {
  name: "kushagra",
  age: 21,
};

class Remote {
  constructor(product, price, color) {
    this.product = product;
    this.price = price;
    this.color = color;
  }

  powerOn() {
    console.log("the machine is on now");
  }
  powerOff() {
    console.log("the machine is off now");
  }
}
class Bottle {
  constructor(material, price, color) {
    this.material = material;
    this.price = price;
    this.color = color;
  }

  fill() {
    console.log("the bottle is filled now");
  }
  drink() {
    console.log("drinking from the bottle");
  }
}

let remote1 = new Remote("tv", 5000, "black");
// remote1.powerOn();

Bottle.prototype.emoty = function () {
  console.log(
    "Ye Class ka hoga ye sab object ka alag alag nahi hoga sabke liye same hoga(shared hoga)"
  );
};

let bottle1 = new Bottle("plastic", 200, "blue");
// bottle1.fill();

console.log(this);

function abcd() {
  console.log(this);
}

let obj1 = {
  fun: function () {
    console.log(this);
  },
};

obj1.fun();

const abc = () => {
  console.log(this);
};
