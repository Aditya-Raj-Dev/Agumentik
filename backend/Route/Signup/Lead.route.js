const {Router}=require("express")
const { Lead } = require("../../Controller/Signup/Lead.controller")

 const LeadRoute=Router()

 LeadRoute.post("/",Lead)

 module.exports={LeadRoute}