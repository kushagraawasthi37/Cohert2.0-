let body = document.body;
let img = document.querySelector("img");
let msg = document.querySelector("h1 span");

img.addEventListener("mouseenter", function () {
  msg.innerHTML = "Chala ja bsdk";
});
img.addEventListener("mouseleave", function () {
  msg.innerHTML = "Dur hi rehna bsdk";
});
