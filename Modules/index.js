const Express = require('express');
const app = Express();
const cors = require('cors');

const Register = require('./Routes/Register.js');
const Login = require('./Routes/Login.js')
const RegisterVacinnes = require('./Routes/RegisterVaccines.js');

app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());
app.use(cors());



let port = process.env.PORT || 3000;
app.listen(port, (e) => {
    if (e) {
        console.error(e);
    } else {
        console.log('Server started ');
    }
});

app.use('/', Register);
app.use('/', Login);
app.use('/', RegisterVacinnes);

module.exports = app;