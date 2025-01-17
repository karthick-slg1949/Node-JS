// import express from 'express'
// import path from 'path'
// import dotenv from 'dotenv'
// import morgan from 'morgan'

// let app=express()
// dotenv.config({path,"./config/config.env"})
// app.get('/',(req,resp)=>{
//     resp.send("Root request")
//     resp.send(path.join(process.cwd(),'static web','index.html'))    
// })

// app.get('/about',(req,resp)=>{
//     resp.send(path.join(process.cwd(),'static web','about.html'))
// })

// app.listen(8080,'127.0.0.1',(err)=>{
//     if(err)throw err
//     console.log(`express server is running`);
// })

import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import chalk, { Chalk } from 'chalk'

//create express app
let app = express()

app.use(morgan('dev'))


//load configuration env variable
dotenv.config({path:"./config/config.env"})
let port = process.env.PORT
let hostname=process.env.HOST_NAME

//create root req api
//url: http://localhost:8080/
app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static web","index.html"),(err)=>{})
})
app.get('/about',(req,resp)=>{
         resp.sendFile(path.join(process.cwd(),'static web','about.html'))
     })
     app.get('/service',(req,resp)=>{
        resp.sendFile(path.join(process.cwd(),'static web','service.html'))
    })
    app.get('/contact',(req,resp)=>{
        resp.sendFile(path.join(process.cwd(),'static web','contact.html'))
    })
  
app.listen(port,hostname,(err)=>{
    if(err) throw err 
    console.log(`Server Running on http://localhost:127.0.0.1.8080/`)
    
    })

    // ${hostname}:${port}