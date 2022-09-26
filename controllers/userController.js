const customer = require("../models/customer");
const order = require("../models/Orders");

const getUser = async (req, res) => {
    try{
        const datas = await customer.findAll();
        res.status(200).json(datas);
    }
    catch(err)
    {
        res.json(err);
    }
   
}

const addUser = async (req, res) => {
    try{
        let info = {
            name: req.body.name,
            email: req.body.email
        }
    
        const saveUser = customer.create(info);
        res.status(201).json(info);
    }
    catch(err)
    {
            res.json(err);
    }
    
}
const singleUser = async (req, res) => {
try{
    const data = await customer.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json(data);
}
catch(err){
  res.json(err);
}
    
}


const updateUser=async(req,res)=>{
    try{
        const updateUser=await customer.update(req.body,{where: {id:req.params.id}})
        res.status(200).json("updated user");
    }
    catch(er){
        res.json(er);
    }
    
}

const deletedUser=async(req,res)=>{
    try{
        const deleteUser=await customer.destroy({where:{id:req.params.id}})
        res.status(200).json("User Deleted!");
    }
    catch(err)
    {
        res.json(err)
    }
  
}


module.exports = {
    getUser,
    addUser,
    singleUser,updateUser,deletedUser
}