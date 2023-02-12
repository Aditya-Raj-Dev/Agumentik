const mongoose=require("mongoose")

const  Leadschema=mongoose.Schema({
 name:{type:String,required:true},
 contact:{type:Number,required:true}
},{timestamps:true})

const Leadmodel=mongoose.model("agtmentikLead",Leadschema)

module.exports={Leadmodel}