const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import studentRoutes from './routes/student.js'

const studentRoutes = require('./routes/student');

const app = express();

//buildin middleware
app.use(bodyParser.json({limit: '20mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));

//cross orign resouce sharing
app.use(cors());

//custom middleware
app.use('/student', studentRoutes);

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT);
        console.log('connect to db');
    })
    .catch(err => console.log(err.message)); 