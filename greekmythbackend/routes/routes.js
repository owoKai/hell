const express = require('express')
const app = express.Router()
const { create } = require("../routes/routemethods");
const { deleteGod } = require("../routes/routemethods");

const cors = require('cors');
let corsOptions = {   origin: 'http://localhost:3000/',   optionsSuccessStatus: 200 , methods:['GET', 'POST', 'DELETE'] };

app.post('/create', cors(corsOptions), create)
app.post('/delete', cors(corsOptions), deleteGod)

module.exports = app