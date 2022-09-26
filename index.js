const express=require('express');

const sequelize=require("./util/database");
const customer=require("./models/customer");
const order=require("./models/Orders");

const userRouter=require("./Router/router");

const app=express();
const PORT=3000;


app.get('/',(req,res)=>{
    res.send("Check")
})

sequelize.sync({force:false})
.then(()=>{
    console.log("yes they are sync!")
})
app.use(express.json());
app.use("/",userRouter)




app.listen(PORT,()=>{
    console.log("SERVER RUNNING!!");
})
