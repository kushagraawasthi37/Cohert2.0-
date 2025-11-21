let main = document.querySelector("main");
let section = document.querySelector(".section");
let download = document.querySelector(".download");
let reset = document.querySelector(".reset");
let h1 = document.querySelector("h1");
let progress = document.querySelector(".inner");

download.addEventListener("click", () => {
  const time = 50 + Math.random() * 50;
  let a = 0;
  download.style.pointerEvents = "none";
  const interval = setInterval(function () {
    a++;
    progress.style.width = a + "%";
    h1.innerHTML = a + "%";
  }, time);

  console.log(progress.style.width);

  setTimeout(() => {
    clearInterval(interval);
    download.style.opacity = 0.2;
    console.log("Downloaded in ", time / 10, "seconds");
    download.disabled = true;
    download.innerHTML = "Downloaded";
  }, time * 100);
});

reset.addEventListener("click", () => {
  progress.style.width = 0 + "%";
  h1.innerHTML = 0 + "%";
  download.style.pointerEvents = "auto";
  download.style.opacity = 1;
  download.disabled = false;
  download.innerHTML = "Download";
});
