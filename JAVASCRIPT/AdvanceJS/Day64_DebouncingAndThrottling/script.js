//Debouncing and throttling

//Debouncing-> Jab user rukega tab api call ya work hoga ->Simply code chatgpt karo

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

document.querySelector("#search").addEventListener(
  "input",
  debounce(function () {
    console.log("Search hogya");
  }, 300)
);

//Throttling-> Jab tak action hoga har kuch interval ke baad response dega debouncing mai ye the jab rukoge to response dega

function throttle(fn, delay) {
  let last = 0;
  return function () {
    let now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn();
    }
  };
}

document.body.addEventListener(
  "mousemove",
  throttle(function (e) {
    console.log("Abhay");
  }, 2000)
);

//JSON parse-> json se object banate ho(Object banate jo json se)
//JSON stringyfy ->json mai convert kar dega (JSON banate ho)
