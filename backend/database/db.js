const mongoose =require("mongoose")

const connection= mongoose.connect("mongodb+srv://adi:123@cluster0.jwi6q3v.mongodb.net/test")

module.exports={connection}