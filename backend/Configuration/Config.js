const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://benmarouaneromdhane:84VjbIAaIlbiejvp@cluster0.v00uybj.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected");
  } catch (error) {
    if (error) throw error;
  }
};
module.exports = connectdb;
