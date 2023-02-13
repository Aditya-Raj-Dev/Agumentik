const {Router}=require("express")
const { Lead, GetLeads } = require("../../Controller/Signup/Lead.controller")

 const LeadRoute=Router()

 LeadRoute.post("/",Lead)
 LeadRoute.get("/",GetLeads)

 module.exports={LeadRoute}