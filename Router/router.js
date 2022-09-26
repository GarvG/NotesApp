const express=require("express");
const router=express.Router();
const usercontroller=require("../controllers/userController");

router.get("/get",usercontroller.getUser);
router.post("/add",usercontroller.addUser);
router.get("/:id",usercontroller.singleUser);
router.put("/:id",usercontroller.updateUser);
router.delete("/:id",usercontroller.deletedUser);




module.exports=router;