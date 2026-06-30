const express=require('express');
const {handleGenerateNewShortURL,handleIncrement,handleAllURLS}=require('../controllers/url');
const router=express.Router();

router.post('/',handleGenerateNewShortURL);
router.get('/:shortId',handleIncrement);
router.get('/',handleAllURLS)
module.exports=router;