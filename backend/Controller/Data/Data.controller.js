
const {Datamodel}=require("../../Model/Data.model")
const { Leadmodel } = require("../../Model/lead.model")

const GetData= async (req,res)=>{
    try{
        const data=await Datamodel.find()
        res.status(201).send({"msg":"Successfull","data":data})
    }
    catch{
        res.status(500).send({"msg":"failed"})
    }
}

const PostData= async(req,res)=>{
    try{
        const data=await Datamodel.create(req.body);
        res.status(201).send({"msg":"success","data":data})
    }
    catch(e){
        res.status(500).send({"msg":"failed","error":e})
    }
}


const AddotherAdmin= async(req,res)=>{
    try{
      const data=await Leadmodel.findOneAndUpdate({contact:req.body.contact},{role:"admin"},{new:true})
      res.status(201).send({"msg":"success","data":data})
    }
    catch(e){
res.status(500).send({"msg":"failed","error":e})
    }
}

module.exports={GetData,PostData,AddotherAdmin}
