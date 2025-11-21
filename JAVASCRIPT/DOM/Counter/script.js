const h1 = document.querySelector("h1");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");

let a = 0;
inc.addEventListener("click", () => {
  a++;
  h1.innerHTML = a;
});
dec.addEventListener("click", () => {
  a--;
  h1.innerHTML = a;
});
