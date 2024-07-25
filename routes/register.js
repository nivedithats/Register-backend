const express = require('express');
const { UploadRegister, getRegister } = require('../controllers/register');


const routes = express.Router();

routes.post('/register/add', UploadRegister)
routes.get('/register/list',  getRegister);



module.exports = routes;