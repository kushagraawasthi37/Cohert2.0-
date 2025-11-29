let elems = document.querySelectorAll(".elem");

// console.log(elems);

elems.forEach((elem) => {
  let btn = elem.childNodes[3];
  btn.addEventListener("click", (e) => {
    if (btn.textContent === "Add Friend") {
      btn.textContent = "Remove Friend";
    } else {
      btn.textContent = "Add Friend";
    }
  });
});
