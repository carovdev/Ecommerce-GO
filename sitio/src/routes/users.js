var express = require('express');
var router = express.Router();
let {login,processLogin,registro,processRegistro,pass,word,profile,profileEdit,profileUpdate,logout} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator = require('../validations/profileValidator');
const avatar = require('../middlewares/userStorage');

/* GET users listing. /users */
router.get('/registro', registro);
router.post('/registro', avatar.single('avatar'), registerValidator, processRegistro);

router.get('/login', login);
router.post('/login', loginValidator, processLogin);

router.get('/forgot', pass);

router.get('/profile', profile);
router.get('/profileEdit', profileEdit);
router.put('/profile', avatar.single('avatar'), profileValidator, profileUpdate);

router.get('/logout',logout);

module.exports = router;
