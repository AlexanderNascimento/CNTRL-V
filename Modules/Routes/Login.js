const express = require('express');
const router = express.Router();
const {Op}=require('sequelize');
const Users = require('../CRUD/Tables/USERS.js');

router.post('/login', (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        try {
            
            Users.findOne({  where: {
              [Op.and]: [
                  { tb01_Email: email },
                  { tb01_Password: password }
              ]
          }
             }).then( (userData) => {
              if(userData!=undefined){
                res.send({aproved:true,mensage:userData});
              }else{
                res.send({aproved:false,mensage:'failed'});
              }
            });
    
        } catch (error) {
            res.send({aproved:false, message: error })
        }
      
 });

 module.exports = router;
