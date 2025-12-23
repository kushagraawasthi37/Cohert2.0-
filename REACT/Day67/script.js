import h1 from "./app.js";
// import test from "./test.js";

// console.log(add(1, 23));
// console.log(test);

// console.log(React)
// let h1 = document.createElement("h1");
// h1.innerHTML = `Hello from JS`;

// document.body.appendChild(h1);

//React Work done >> it create the UI
// var h1 = React.createElement("h1", null, "Mai hu Giaan");
// var h2 = React.createElement("h2", null, "Mai hu Sunio");

// //Work of React DOM >> connecting the UI With the DoM
let root = document.querySelector("#root");

root = ReactDOM.createRoot(root);
// root.render(h2)


root.render(h1());
