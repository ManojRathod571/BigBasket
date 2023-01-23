const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connect = async () => {
  return await mongoose.connect(
    "mongodb+srv://actuallyakshay:akshay@cluster0.eifrxaw.mongodb.net/BigBasket?retryWrites=true&w=majority"
  );
};

module.exports = connect;
