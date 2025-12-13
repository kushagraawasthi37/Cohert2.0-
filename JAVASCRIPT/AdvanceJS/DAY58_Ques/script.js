//Class Expression
// let Human = class {
//   constructor() {
//     this.isHuman = true;
//   }
// };

//Inheritance
// class Animal {
//   constructor() {
//     this.isAnimal = true;
//     this.legs = 4;
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     this.bark = true;
//   }
// }

//Question 1
let user = {
  name: "Kushagra",
  email: "Kushagraawasthi@gmail.com",
  login: function () {
    console.log("User logged in");
  },
};
user.login();

let user1 = {
  name: "Kushagra",
  email: "Kushagraawasthi@gmail.com",
  login: function () {
    console.log("User logged in");
  },
};
let user2 = {
  name: "Kushagra",
  email: "Kushagraawasthi@gmail.com",
  login: function () {
    console.log("User logged in");
  },
};
let user3 = {
  name: "Kushagra",
  email: "Kushagraawasthi@gmail.com",
  login: function () {
    console.log("User logged in");
  },
};
let user4 = {
  name: "Kushagra",
  email: "Kushagraawasthi@gmail.com",
  login: function () {
    console.log("User logged in");
  },
};
let user5 = {
  name: "Kushagra",
  email: "Kushagraawasthi@gmail.com",
  login: function () {
    console.log("User logged in");
  },
};

class User {
  constructor(name, email) {
    this.email = email;
    this.name = name;
  }
}

User.prototype.login = function () {
  console.log("User logged in");
};
u1 = new User("kushagra", "K@123");
u2 = new User("Abhay", "abh@12");
u3 = new User("Anuj", "@an123");
u4 = new User("Rohan", "ra@123");
us = new User("Mohan", "@mn");

//Question 4
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discount(percent) {
    this.price = this.price - (this.price * percent) / 100;

    return this.price;
  }
}

let product1 = new Product("Laptop", 100000);
product1.discount(10);

// console.log(product1.discount(10));

//Section 1
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
}

Car.prototype.drive = function () {
  console.log(`The ${this.brand} is driving at a speed of ${this.speed} km/h`);
};

let car1 = new Car("Toyota", 120);
let car2 = new Car("Honda", 150);
// car1.drive();
// car2.drive();

//Section 3
class Student {
  constructor(name, rollnumber) {
    this.name = name;
    this.rollnumber = rollnumber;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and  my rollnumber is ${this.rollnumber}`
    );
  }
}

let obj1 = {
  sayeNmae: function () {
    console.log(this);
  },

  sayArrowName: () => {
    console.log(this);
  },
};

obj1.sayArrowName(); //Window
obj1.sayeNmae(); //obj1

//Bina class ke bhi consturctor bana sakte hai
function Boys() {
  this.name = "Kushagra";
}
//Isko call karne ke liye new ka use karna padega
let boy1 = new Boys();
// console.log(boy1.name);

//Call bind and

//Call
function abcd(age) {
  console.log(this.name);
  console.log(age);
}

let obj2 = {
  name: "Kushagra",
};
//Call
abcd.call(obj2, 21);

//Apply
abcd.apply(obj2, [21]);

//Bind
let abcd2 = abcd.bind(obj2, 21);
abcd2();
