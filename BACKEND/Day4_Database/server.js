const app = require("./src/app");
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Kushagra_note_admin:55SoCWJB5IDUiKEx@cluster0.1dv3fk7.mongodb.net/?appName=Cluster0",
    )
    .then(() => {
      console.log("Connected to the database✅");
    })
    .catch((err) => {
      console.log("Error connecting to the database❌", err);
    });
};

try {
  connectDB();
} catch (error) {
  console.log("Error connecting to the database❌", error);
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/* 
Server ko run karna 
database se connect karna
*/
