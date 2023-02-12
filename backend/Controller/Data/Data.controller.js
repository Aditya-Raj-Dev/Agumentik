const {Datamodel}=require("../../Model/Data.model")

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
        res.status(201).send({"msg":"success",data:data})
    }
    catch(e){
        res.status(500).send({"msg":"failed"})
    }
}


const AddotherAdmin= async(req,res)=>{
    try{
      const data=await Datamodel.findOne({email})
    }
    catch{

    }
}
