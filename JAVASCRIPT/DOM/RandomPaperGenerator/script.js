let button = document.querySelector("button");
let main = document.querySelector("main");

button.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.height = "150px";
  div.style.width = "150px";

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let r = Math.floor(Math.random() * 361);

  div.style.background = `linear-gradient(to right bottom, rgb(${c1},${c2},${c3}),rgb(${c2},${c1},${c1}),rgb(${c1},${c3},${c1}))`;
//   console.log(div.style.background);

  let leftPos = Math.floor(Math.random() * 100);
  let topPos = Math.floor(Math.random() * 100);

  //   console.log(leftPos);
  //   console.log(topPos);

  div.style.position = "absolute";
  div.style.left = leftPos + "%";
  //   console.log(div.style.left);
  div.style.top = topPos + "%";
  //   console.log(div.style.top);
  div.style.rotate = r + "deg";

  //Append the above created element to the main
  main.appendChild(div);
});
