const express = require("express");
const router = express.Router();

const controller = require('./controller/main'); 

router.get("/index", controller.index);
router.get("/name",controller.name); 



module.exports = router; 
