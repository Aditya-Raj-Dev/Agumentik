const {Leadmodel}=require("../../Model/lead.model")



const Lead=async (req,res)=>{
    const {name,contact}=req.body;
     const user=await Leadmodel.findOne({contact})
     console.log(user)
      if(user){
         res.send({"msg":"Lead Already Added",toast:"i"})
      }
      else{
         const data=await Leadmodel.create({
            name,contact
         })
         res.send({"msg":"lead Added","toast":"s"})
      }
}

 module.exports={Lead}