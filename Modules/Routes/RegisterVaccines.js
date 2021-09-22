const express = require('express');
const router = express.Router();
const {Op}=require('sequelize');
const Users = require('../CRUD/Tables/USERS.js');
const CardVaccines = require('../CRUD/Tables/VACCINATIONCARD.js');

router.post('/registerVacines',(req, res) => {
    const carteiraVacinas= req.body.dados;
    const id=req.body.id;
    Users.findOne({ where:{tb01_Id:id}}).then((userData) =>{
        if(userData!=null){
            carteiraVacinas.map(i=>{
                CardVaccines.create({
                    tb03_IdUser:id,
                    tb03_IdVaccine:i.id,
                    tb03_Date:i.data
                })
            })
            
        }
        res.send({aproved:true});
    }).catch(err => {
        res.send({aproved:false,mensage:err})
    })
})

module.exports = router;