const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      UseNewUrlParser: true,
      UseUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = database;
