const express = require('express');
const router = express.Router();

const Auth = require('../middleware/verifAuth');
const Users = require('../controllers/controller')

router.get('/users', Users.getUsers);

router.post('/add-user', Users.pushNewUser);
router.post('/login', Auth.verifUser);






module.exports = router;