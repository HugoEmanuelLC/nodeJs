const listUsers = require('../models/users')
const { v4: uuidv4 } = require('uuid');

exports.verifUser = (req, res, next)=>{
    console.log(listUsers.getUsers());
    console.log(req.body);
    listUsers.getUsers().filter(item =>{
        if (item.username == req.body.username) {
            console.log(true);
            console.log(uuidv4());
            res.send(uuidv4())
            
        } else {
            console.log(false);
            console.log(uuidv4());
            res.send(uuidv4())
        }
    })
    next()
    console.log("verif");
    res.end()
}

