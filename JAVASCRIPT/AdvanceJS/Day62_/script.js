//Error ->Anything that cause problem to stop/block

//Error handeling->Problem/error ko sahi se handle kara

//Common type of error

//1.Syntax error-> likhte time error
// leat a=10;

//2. Runtime error-> during compile time no error but there is error at run time
// let a = 10;
// console.log(a.name.surname);

//3.Logical error->apke code ko kuch aur chahiye the aur wo kar kuch aur rha hai->Koi error nahi ayega but result as expected nahi hoga
function add(a, b) {
  return a - b;
}
//Expected ki ye add karega but ye kar subtract rha hai
// console.log(add(1, 2));

//Error handler try-catch-finally
try {
  let a = 10;
  console.log(a.name.color);
  //   console.log("No error");
} catch (error) {
  //   console.log(error);
} finally {
  //   console.log("Finally block will always execute");
}

// console.log("agar try catch na hota to ye kabhi nahi chalta ");

//Understanding the error object->[message,name,stack]
try {
  let a = 10;
  //   console.log(a.name.color);
} catch (error) {
  console.log(error.message); //Message of error
  console.log(error.name);
  console.log(error.stack);
}

//How to throw error in JS
// throw new Error("Something went wrong");

try {
  let a = 10;
  console.log(a.name.age);
} catch (err) {
  throw new Error(
    "Something went wrong from our side,Please wait for some time"
  );
}
