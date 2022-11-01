
const mongoose = require("mongoose");

mongoose.connect("mongoose://localhost:27017/users", {
  useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  linkedin: String,
  instagram: String,
  mobileNumber: Number,
  bio: String,
});

const user = mongoose.model("user", userSchema);

