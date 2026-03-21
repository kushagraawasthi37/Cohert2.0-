const app = require("./src/app");
const connectDB = require("./src/config/database");

async function dbConnection() {
  try {
    await connectDB();
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
}

dbConnection();

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
