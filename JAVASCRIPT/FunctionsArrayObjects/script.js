function add(a, b) {
  return a + b;
}

// console.log(add(1,10));

function greeting(name = "Guest") {
  //   console.log(`Hii ${name}`);
}
// greeting("KUshagra");

//Rest parameter use
function addNumber(...arr) {
  let sum = 0;

  //   //Simple using Loops
  for (let i = 0; i < arr.length; i++) {
    // sum += arr[i];
  }

  //   //Using the ForEach
  arr.forEach((ele) => {
    // sum += ele;
  });

  //   //Using reduce array combine karke single element mai reduce  kar dega
  let ans = arr.reduce((acc, val) => {
    return acc + val;
  }, 0); //0 -> initial value of accumulator

  return sum;
}

// console.log(addNumber(1,23,4,1,3,4));

//IIFE Function use
(() => {
  //   console.log("I run instantly");
})();

function Outer() {
  let a = 10;
  function Inner() {
    // console.log(a);
  }
  Inner();
}

// Outer();

//Slice and unslice in array
let arr = ["apple", "banana", "Mango", "Grapes", "PineApple"];
arr.push("Orange"); //Add element at end
arr.shift(); //remove the first element
arr.unshift("Pears"); //Add element at front

// console.log(arr);

//Loop to print all element of array
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

//Object creation

const obj = {
  name: "Kushagra Awasthi",
  age: 20,
  city: "Shahjahanpur",
};

//One way to access each one by one

//For in loop used for accessing the key of object
for (let key in obj) {
  //   console.log(key);
  //   console.log(obj[key]); //Value of key
}

//SetTimeout
setTimeout(function () {
  //   console.log("SettimeOut will run after the 5 sec");
}, 5000);

//Level 2

//Higher order function
function runTwice(Greet) {
  Greet();
  Greet();
}

// runTwice(greeting);

let num = 10;

//Pure function->same imput same output;   Bahar bale variable ki value nahi change hogi koi bhi
function pureFunc(num) {
  //   console.log(num);
}
// pureFunc(10);

//Impure function->same imput may dfferent output; Bahar bale variable ki value badha di
function impureFunc(num) {
  //   console.log(num + Math.random());
}
// impureFunc(10);

//Function uses object destructuring
function printUser({ name, age }) {
  //   console.log("Name ", name);
  //   console.log("Age ", age);
}

// printUser(obj);

//Map use in array
const nums = [1, 2, 3, 4, 5];
const numsSquare = nums.map((num) => {
  return num * num;
});
// console.log(numsSquare);

//Filter use in array
const evenNums = nums.filter((num) => num % 2 == 0);
// console.log(evenNums);

//Reduce use in array
const salary = [1000, 2000, 3000];
const total = salary.reduce((acc, item) => acc + item, 0);

// console.log(total);

//Some in array->anyone element if satisfy the condition then it will result true
let flag = salary.some((num) => {
  return num < 2000;
});

console.log(flag);

//Every in array->Every element if satisfy the condition then it will result true

flag = salary.some((num) => {
  return num < 2000;
});

// console.log(flag);

//Nested Object
let user = {
  name: "Kushagra",
  contact: {
    email: "kushagra@kush.com",
    mobile: 123434,
  },
};

for (let key in user) {
  if (user[key] === "contact") {
    for (let ele in user[key]) {
      //   console.log(user[key][ele]);
    }
  } else {
    // console.log(user[key]);
  }
}

//Checking the behavour of freeze
Object.freeze(user); //user mai kuch change nahi kar skte

user.name = "Abhay"; //Change nahi hoga na ki koi key-valu chnage na koi add/remove
// console.log(user.name);

//Object Seal->existing key ki value ko chnage kar skte ho lekin new key add nahi kar skte
Object.seal(user);
user.name = "Meee";//Kar skte ho
user.hero = true;//Nahi kar skte

//this keyword -> more in advance JS
//ek aisa keyword jo dynamic hai iski value badal jati hai depend on  ki kaha use kar rhe ho

// console.log(this); //Global,function mai iski value window hoti hai
//Object mai window nahi hoti har baar hai isme iski value ye object jisme this hai hoga but
let student = {
  department: "ITE",
  details: function cd(name) {
    console.log(this);
    let a = () => {
      console.log(this); //Ye apne parent cd ke this ki value lega jo student object hai
    };
    a();
  },

  det: () => {
    console.log(this); //Ye apne parent obj ke this ki value lega jo global window object hai
  },
};

student.det();
student.details();

//This arrow function ke case mai this ki value apne parent ki this ki value lega jo bhi uske parent ke this ki value hogi wahi this ki bhi
