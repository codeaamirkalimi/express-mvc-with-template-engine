const users = require('../models/users.model');
const path = require("path");

function getAllUsers(req, res){
    res.json(users);
}

function  getSingleUser(req, res){
    const user = users[req.params.id];
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            'error': 'No friend found!',
        });
    }
}

function postUsers(req, res){
    if(!req.body.name) {
        return res.status(400).json({
            error: 'Users data missing',
        });
    }
    const user = {
        "id": users.length,
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email,
        "address": {
            "street": req.body.address.street,
            "suite": req.body.address.suite,
            "city": req.body.address.city,
            "zipcode": req.body.address.zipcode,
            "geo": {
                "lat": req.body.address.geo.lat,
                "lng": req.body.address.geo.lng
            }
        },
        "phone": req.body.phone,
        "website": req.body.website,
        "company": {
            "name": req.body.company.name,
            "catchPhrase": req.body.company.catchPhrase,
            "bs": req.body.company.bs
        }
    }
    users.push(user);
    res.json(user);
}

function getImage(req, res) {
    let image = path.join(__dirname,'..','public','pancard.jpg');
    res.sendFile(image);
}

module.exports = {
    getAllUsers,
    getSingleUser,
    postUsers,
    getImage
}