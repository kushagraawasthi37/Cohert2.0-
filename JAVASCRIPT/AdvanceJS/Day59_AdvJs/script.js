//Javascript is single threaded supporting asynchronous programming using event loop

//Callback ->ek fucntion jo turant call hota hai jab dusra function complete ho jata hai tab ye chalta hai

//Callback-> ek function ko as a parameter dusre function me pass karna

function abcd(fn) {
  fn(function (fn2) {
    fn2();
  });
}

abcd(function (func3) {
  func3(function () {
    console.log("hey");
  });
});

//Working with the callbacks

//Programmer mai ye likha hoga->logic of eventlistner
function iceCreamLao(address, cb) {
  //Logic to buy ice-cream
  cb("Vanilla");
}

//Hum ye chalata hai like ye hai eventlistener
iceCreamLao("Address", function (icecream) {
  console.log(icecream + " has been bought");
});
