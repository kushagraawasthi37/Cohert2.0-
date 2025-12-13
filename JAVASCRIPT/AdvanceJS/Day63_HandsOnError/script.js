//  Get the weather of city using the Open Weather API key

// async function getWeather(city) {
//   //We can do fetch().then().then() or use await aysnc
//   const API_KEY = `b2f62efa48c75b3dc3ba793d54a26469`;
//   try {
//     let raw = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//     );
//     if (!raw.ok) {
//       throw new Error("City not found.Try Some other place");
//     }
//     let realData = await raw.json();
//     console.log(realData.main);

//     showWeatherInfo(realData.main);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// // {temp: 270.52, feels_like: 270.52, temp_min: 270.52, temp_max: 270.52, pressure: 1022, …}

// function showWeatherInfo(data) {
//   let div = document.createElement("div");

//   div.innerHTML = `
//  <div> Temperature :${data.temp_min}</div>
//         <div> Feels Like :${data.feels_like}</div>
//         <div> Min-Temperature :${data.temp_min}</div>
//         <div> Max-Temperature :${data.temp_max}</div>
//         <div> Pressure:${data.pressure}</div>
//  `;

//   div.setAttribute("class", "Weather-info");
//   document.body.appendChild(div);
// }
// getWeather("Leh");

//Scinerio 2:Bulk Email sending Simulation with parallel promise and error handeling

//Think of a scinerio where you must simulate sending bulk emais to 5 users.
//Treat each email sending operation as a Promise(You may simulate it using setTimeout).

//All emails must be sent in parallel using Promise.all

//If any email fails(For example, due to a random falure condition), you must catch the error and clearly show which specific email failed

//In addition, use a finally block to display a message indicating that the "Email process is complete"

const users = ["a@abc.com", "b@abc.com", "c@abc.com", "d@abc.com"];

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);
    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);

      if (probability < 5) {
        resolve(`Email sent to ${email}`);
      } else {
        reject(new Error("Email sending failed"));
      }
    }, time * 1000);
  });
}

async function sendEmails(users) {
  let allresponses = users.map((user) => {
    return sendEmail(user)
      .then(function (data) {
        // console.log(data);
        // console.log("Done");

        return data;
      })
      .catch((error) => {
        // console.log("Failed");
        // console.log(error);
        return error;
      });
  });
  //   console.log(allresponses);

  let ans = await Promise.all(allresponses);
  //   console.log(ans);
  ans.forEach((status) => console.log(status));
  return allresponses;
}

sendEmails(users);
