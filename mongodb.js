const mongoose = require("mongoose");
(async () => {
  try {
    await mongoose.connect(process.env.mongodb);
    console.log(`Mongo DataBase Connected`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
})();
