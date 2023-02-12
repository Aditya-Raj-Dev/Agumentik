const express=require("express")
const cors=require("cors")
const {connection}=require("./database/db")
const { SignupRoute } = require("./Route/Signup/Signup.route")
const { DataRoute } = require("./Route/Data/Data.route")
const { LeadRoute } = require("./Route/Signup/Lead.route")



const app=express()
app.use(cors())
app.use(express.json())


app.use("/signup",SignupRoute)
app.use("/lead",LeadRoute)
app.use("/data",DataRoute)

app.get("/",(req,res)=>{
    res.send("welcome")
})


app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to the database ")
    }
    catch{
        console.log("error in connecting")
    }
    console.log("server started")
})