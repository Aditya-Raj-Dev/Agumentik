const mongoose=require("mongoose")

const DataString={type:String}
const DataArray={type:Array}
const DataObject={type:Object}

const  Dataschema=mongoose.Schema({
  topposter:DataString,
  topheading:DataArray,
  midheading:DataObject,
  midposter:DataString,
  lowheading:DataString,
  lowimage:DataArray,
},{timestamps:true})

const Datamodel=mongoose.model("agtmentikdata",Dataschema)

module.exports={Datamodel}