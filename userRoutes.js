const express= require("express")

const {home,createUser, getUsers,deleteUser,editUser} =require("../controllers/userController.js")




const router =express.Router();

router.get("/",home);
router.post('/createUser',createUser);
router.get('/getUsers',getUsers);

router.put('/editUser/:id',editUser);

//routes m jo id h controllers m v whae lenge

router.delete('/deleteUser/:id',deleteUser);


module.exports = router
