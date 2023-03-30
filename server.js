import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';

// const express = require('express');
// const dotenv = require('dotenv').config();
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const app = express();

//Import routes
//const authRoute = require('./routes/auth');
import authRoute from './routes/auth.js';

//Global error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'something went wrong';

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//Database connection
const db_connect = async () => {
  try {
    const db = process.env.MONGO_DB_URL;
    await mongoose.connect(db);
    console.log('MongoDB connected succesfully');
  } catch (error) {
    throw error;
  }
};

//Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routes
app.use('/api/auth', authRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  db_connect();
  console.log(`App running on port ${port}`);
});
