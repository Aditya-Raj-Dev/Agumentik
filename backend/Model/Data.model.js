const mongoose=require("mongoose")

const DataString={type:String}
const DataArray={type:Array}

const  Dataschema=mongoose.Schema({
  topposter:DataString,
  topheading:DataArray,
  midheading:DataArray,
  midposter:DataString,
  lowheading:DataString,
  lowimage:DataArray,
},{timestamps:true})

const Datamodel=mongoose.model("agtmentikdata",Dataschema)