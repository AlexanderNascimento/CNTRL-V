const express = require('express');
const router = express.Router();

const Users = require('../CRUD/Tables/USERS.js');

router.post('/register', (req, res) => {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const idSus = req.body.idSus;
    const date = req.body.date;
    const gender = req.body.gender;

    Users.findOne({ where: { tb01_Email: email } }).then(async (userData) => {

        if (userData == undefined) {

                try {
                    const createUser = await Users.create({
                        tb01_Name: name,
                        tb01_LastName: lastName,
                        tb01_IdSus: idSus,
                        tb01_Email: email,
                        tb01_Password: password,
                        tb01_Byrthday: date,
                        tb01_Genrer: gender
                    })
                    Users.findOne({ where: { tb01_Email: email } }).then((userData)=>{
                        res.send(JSON.stringify({ aproved: true,id:userData.tb01_Id }));
                    })
                   
                } catch (error) {
                    res.send(JSON.stringify({ aproved: error }));
                }


        } else {

            res.send({ aproved: false,mensage:'Email ja cadastrado' });

        }

    }).catch((e) => {
        console.log(e);
    });
});

module.exports = router;
