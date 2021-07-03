const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/yourplanning";

//mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose
  .connect("mongodb://127.0.0.1:27017/SUCCESS", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database Successfully Connected");
    },
    (error) => {
      console.log(error);
    }
  );

module.exports = mongoose;
