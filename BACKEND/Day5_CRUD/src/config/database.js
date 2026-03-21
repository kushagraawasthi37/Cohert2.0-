const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://Kushagra_note_admin:55SoCWJB5IDUiKEx@cluster0.1dv3fk7.mongodb.net/?appName=CRUD_oeration";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("Database Connected Successfully✅");
  } catch (error) {
    console.log(console.log("Database Connected Failed❌", error));
  }
};

module.exports = connectDB;
