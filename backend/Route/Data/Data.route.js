const {Router}=require("express")
const { PostData, GetData, AddotherAdmin } = require("../../Controller/Data/Data.controller")

 const DataRoute=Router()

 DataRoute.post("/",PostData)
 DataRoute.get("/",GetData)
 DataRoute.patch("/admin",AddotherAdmin)

 module.exports={DataRoute}