const express = require('express');
const usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
    console.log(`The ip address is: ${req.ip}`);
    next();
});
usersRouter.get('/', usersController.getAllUsers);
usersRouter.get('/image', usersController.getImage);
usersRouter.get('/:id', usersController.getSingleUser);
usersRouter.post('/', usersController.postUsers);

module.exports = usersRouter;