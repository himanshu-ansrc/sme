import express from 'express'
import path from 'path'
const app = express();

// import path from 'path'
import bodyParser from 'body-parser'
import Template from './../template.js'
// import cookieParser from 'cookie-parser'
// import compress from 'compression'
import cors from 'cors';
const CURRENT_WORKING_DIR = process.cwd();
//app.use(express.static('public'))
// import helmet from 'helmet'
// import Template from './../template'
// import userRoutes from './routes/user.routes'
// import authRoutes from './routes/auth.routes'
//
// modules for server side rendering
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import MainRouter from './../client/MainRouter'
// import StaticRouter from 'react-router-dom/StaticRouter'

//comment out before building for production
import devBundle from './devBundle'

//comment out before building for production
devBundle.compile(app)
//
// // parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))




app.get('*', (req, res)=>{
   res.send(Template());
})


export default app
