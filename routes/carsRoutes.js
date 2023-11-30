const express=require('express');
const router=express.Router();

const{createCars}=require("../controllers/createCars");
const{getCars,getCarsById}=require("../controllers/getCars");
const{updateCars}=require("../controllers/updateCars");
const{deleteCars}=require("../controllers/deleteCars");

router.post("/createCars",createCars);
router.get("/getCars",getCars);

router.get("/getCars/:id",getCarsById);
router.put("/updateCars/:id",updateCars);
router.delete("/deleteCars/:id",deleteCars);

module.exports=router;