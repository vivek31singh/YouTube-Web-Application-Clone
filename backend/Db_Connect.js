var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/YouTube");

var userSchema = new mongoose.Schema({
email: String,
phoneNumber: Number,
password: String,
firstName: String,
lastName: String,
dob:Date,
gender: String,
username: String
});


module.exports = {userModel :  mongoose.model("users",userSchema)}