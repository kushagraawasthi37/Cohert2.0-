let main = document.querySelector("main");
let button = document.querySelector("button");

const quotes = [
  "Believe in yourself",
  "Dreams demand action",
  "Progress needs patience",
  "Success follows discipline",
  "Failure teaches strength",
  "Every step counts",
  "Focus fuels growth",
  "Consistency beats talent",
  "Small efforts matter",
  "Persistence conquers obstacles",
];

button.addEventListener("click", function () {
  let h1 = document.createElement("h1");
  const idx = Math.floor(Math.random() * 10);
  let r = Math.floor(Math.random() * 361);
  let scale = Math.floor(Math.random() * 10);
  let leftPos = Math.floor(Math.random() * 100);
  let topPos = Math.floor(Math.random() * 100);
  let fontsize = Math.floor(Math.random() * 20);
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let grad = `linear-gradient(to right bottom,
               rgb(${c1},${c2},${c3}),
               rgb(${c2},${c1},${c1}),
               rgb(${c1},${c3},${c1}))`;

  h1.innerHTML = quotes[idx];
  h1.style.background = grad;
  //   console.log(h1.style.background);
  h1.style.webkitBackgroundClip = "text";
  //   console.log(h1.style.backgroundClip);
  h1.style.color = "transparent";
  h1.style.position = "absolute";
  h1.style.top = topPos + "%";
  h1.style.left = leftPos + "%";
  h1.style.rotate = r + "deg";
  h1.style.scale = scale;
  h1.style.fontSize = fontsize + "px";
  h1.style.webkitTextStroke = `1px ${grad}`;
  main.appendChild(h1);
});
