const {getCharById} = require("../controllers/getCharById");

const router = require("express").Router();

router.get("/character/:id", (req,res) =>{
    getCharById(req , res);
});


module.exports = router