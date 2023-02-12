const {Router}=require("express")
const { PostData, GetData } = require("../../Controller/Data/Data.controller")

 const DataRoute=Router()

 DataRoute.post("/",PostData)
 DataRoute.get("/",GetData)

 module.exports={DataRoute}