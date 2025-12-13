const prm = new Promise((resolve, reject) => {
  //Logic to go to meta and get data
  //if data ayaa -> resolve
  //if error aaya->reject

  //Example
  setTimeout(() => {
    resolve(); //Ye resolve hua hai suppose to aab then bala code execute hoga
    // reject(); //Ye reject hua hai suppose to aab catch bala code execute hoga
  }, 2000);
});

prm.then(() => {
  console.log("Promise resolve hua hai");
});

prm.catch(() => {
  console.log("Promise reject hua hai");
});

//fetch se aaya hua data readable nahi hota hai isko json mai convert karna hoga

fetch("https://randomuser.me/api/")
  .then(function (notReadableData) {
    return notReadableData.json();
  })
  .then((readableData) => {
    console.log(readableData.results[0].name.first);
  })
  .catch(function (err) {
    console.log(err);
  });

//Async and Await in Promise
async function abcd() {
  let raw = await fetch("https://randomuser.me/api/");
  let data = await raw.json();
  console.log(data);
}
abcd();

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      if (num < 5) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 3000);
  });
}

async function abcd2() {
  let v = await getNum();
  console.log(v);
}

abcd2();
