const Sequelize=require("sequelize");

const sequelize=new Sequelize('priyonuj-db','priyonuj-ctech','12345@Asdf',{
    host:"priyonuj-sql-server.database.windows.net",
    dialect: "mssql",
    logging:false,
    pool:{
        max:5,
        min:0,
        idle:10000
    }
   
});
sequelize.authenticate()
.then(()=>{
    console.log("connected!");
})
.catch((err)=>{
    console.log("Erorr"+err)
})
module.exports=sequelize;
