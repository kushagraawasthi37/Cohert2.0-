const age = prompt("Enter your age");

// if (age >= 18) {
//   console.log("Adult");
// }

// const marks = prompt("Enter your marks");

// if (marks > 90) {
//   console.log("A Grade");
// } else if (marks >= 75 && marks <= 90) {
//   console.log("B grade");
// } else if (marks >= 50 && marks < 75) {
//   console.log("C grade");
// } else {
//   console.log("Fail");
// }

//Ternary operator
// let score = 40;
// score > 40 ? console.log("pass") : console.log("fail");

const temperature = 20;
// temperature > 30 ? console.log("Hot") : console.log("Pleasent");

//Switch case
// const num = 9;
// switch (num) {
//   case 1: {
//     console.log("Sunday");
//     break;
//   }
//   case 2: {
//     console.log("Monday");
//     break;
//   }
//   case 3: {
//     console.log("Tuesday");
//     break;
//   }
//   case 4: {
//     console.log("Wednesday");
//     break;
//   }
//   case 5: {
//     console.log("Thursday");
//     break;
//   }
//   case 6: {
//     console.log("Friday");
//     break;
//   }
//   case 7: {
//     console.log("Saturday");
//     break;
//   }
//   default: {
//     console.log("Invalid Day");
//     break;
//   }
// }

const country = "India";

if (age > 18 && country === "India") {
  console.log("Eligible for Vote");
} else {
  console.log("Not Eligible");
}
