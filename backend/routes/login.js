const express = require('express')
const router = express.Router()
require('dotenv').config()

const loginSuccess = (hashedPass) => {
    if(JSON.stringify(hashedPass) === process.env.ADMIN_PASS){
        return(true);
    } else {
        return(false);
    }
}

//get all
router.post('/', async (req, res) => {
  try{
      if(loginSuccess(req.body.pass)){
        res.status(200).json({status: 1})
      } else {
        res.status(200).json({status: 0})
      }
  }catch(err){
    res.status(500).json({ message: err.message })
  }
})

module.exports = router