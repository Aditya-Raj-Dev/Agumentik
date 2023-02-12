const mongoose=require("mongoose")

const Signuptype={type:String,required:true}

const  Signupschema=mongoose.Schema({
 email:Signuptype,
 name:Signuptype,
 password:Signuptype,
 gender:Signuptype,
 role:{...Signuptype,default:"user",enum:["user","admin"]}
},{timestamps:true})

const Signupmodel=mongoose.model("agumenticsignup",Signupschema)

module.exports={Signupmodel}