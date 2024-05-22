const express = require('express');
const mongoose = require('mongoose');
const secret = require('./secret');

const app = express()

mongoose.connect(`mongodb+srv://admin:${secret.db_password}@cluster.bmdftwx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`);

console.log(mongoose.connection.readyState);

app.use(express.json());

const userRouter = require('./routes/routes.js');
app.use('/', userRouter);

app.listen(3000, () => console.log('Server started'));
