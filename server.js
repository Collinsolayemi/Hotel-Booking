
import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import jsonwebtoken from 'jsonwebtoken'

const app = express()