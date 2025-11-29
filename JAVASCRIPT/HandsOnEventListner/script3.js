let h1 = document.querySelector("h1");

document.body.addEventListener("keydown", function (e) {
  h1.innerHTML = e.code;
});
