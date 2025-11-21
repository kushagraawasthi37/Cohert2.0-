const box = document.querySelector(".box");

const changeColor = document.querySelector("button");

changeColor.addEventListener("click", () => {
  const clr1 = Math.floor(Math.random() * 256);
  const clr2 = Math.floor(Math.random() * 256);
  const clr3 = Math.floor(Math.random() * 256);

  console.log("color 1 " + clr1 + " color 2 " + clr2 + " color 3 " + clr3);
  box.style.background = `linear-gradient(rgb(${clr1}, ${clr2}, ${clr3}),rgb(${clr2}, ${clr1}, ${clr3})`;
});
