const {Signupmodel}=require("../../Model/Signup.mode")
const bcrypt=require("bcrypt");


const Signup=async(req,res)=>{
    const Signupdata=req.body;
    let user=await Signupmodel.findOne({email:Signupdata.email})
      
    if(user){
        res.send({"msg":"User Already Exhist" , "toast":"i"})
    }
    else{
        bcrypt.hash(Signupdata.password,5,async(err,hash)=>{
          if(err){
            res.send({"msg":"Please Signup Again","toast":"e"})
          }
          else{
            if(Signupdata.email==="admin@gmail.com"){
                const new_user = await Signupmodel.create({ 
                   ...Signupdata,role:"admin",password:hash
               })   
             }
             else{
                const new_user = await Signupmodel.create({ 
                   ...Signupdata,password:hash
                }) 
             }
          }

          res.send({ "msg": "Signup Sucessfull" ,toast:"s"})
        })
    }
}


module.exports={Signup}