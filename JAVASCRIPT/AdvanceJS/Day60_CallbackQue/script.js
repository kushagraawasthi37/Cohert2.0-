//Exercise 1

function afterDelay(time, cb) {
  setTimeout(() => {
    cb();
  }, time);
}

afterDelay(2000, () => {
  //   console.log("Callback executed");
});

//Exercise 2

function getUser(username, cb) {
  //   console.log("Fetching user from database...");
  setTimeout(() => {
    cb(username, { id: 1 });
  }, 1000);
}

function getUserPost(userId, cb) {
  //   console.log("Fetching posts from database...");
  setTimeout(() => {
    cb(["Hello", "How are you??"]);
  }, 1000);
}

getUser("Kushagra", function (username, id) {
  getUserPost(id, function (posts) {
    // console.log("user posts");
    posts.forEach((element) => {
      //   console.log(element);
    });
  });
});

//Exercise 3-->Callback hell
function loginUser(username, cb) {
  setTimeout(() => {
    cb({ username, email: "abc@abc.com", userId: 1 });
    console.log("User logged  in...");
  }, 1000);
}

function fetchPermission(userId, cb) {
  setTimeout(() => {
    cb({ permission: "permitted😍" });
    console.log("Permission fetched...");
  }, 1000);
}

function loadDashboard(permission, cb) {
  setTimeout(() => {
    cb();
    // console.log("Dashboard loaded...");
  }, 1000);
}

loginUser("kushagra", function (data) {
  fetchPermission(data.userId, function (permission) {
    loadDashboard(permission, function () {
      if (permission.permission === "permitted") {
        console.log("Dashboard Loaded");
      } else {
        console.log("You are not allowed to access the dashboard");
      }
    });
  });
});
