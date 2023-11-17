

let listUsers = require('../models/users')

exports.getUsers = (req, res, next)=>{
    console.log(listUsers.getUsers());
    res.send(listUsers.getUsers())
    res.end()
}

exports.pushNewUser = (req, res, next)=>{
    listUsers.pushNewUser(req.body)
    console.log(req.body);
    console.log("envoye !");
    res.status(200)
    res.end()
}