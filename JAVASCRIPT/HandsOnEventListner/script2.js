let body = document.body;
let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (e) {
  console.log(e.x);
  console.log(e.y);

  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
});
