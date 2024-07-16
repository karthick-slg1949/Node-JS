// import express from 'express'
// import userRouter from './Routing/userRouter.js'
// import prodRouter from './Routing/prodRouter.js'
// import morgan from 'morgan'

// //create express app
// let app=express()
// app.use(morgan('tiny'))

// app.use('/user',userRouter)
// app.use('/product',prodRouter)

// app.listen(8080,"127.0.0.1",(err)=>{
//     console.log(`server is running`);
// })

import express from 'express'
import path from 'path'

let app=express()
/*
API URL:http://localhost:8080/
Method Type:GET
Required Fields:None 
 */

app.get('/',(req,resp)=>{
    //resp.send("Root Request")
    resp.sendFile(path.join(process.cwd(),"Web","index.html"),(err)=>{
        if(err)throw err
    })
})

app.get('about.html',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"web",'about.html'),(err)=>{
        if(err)throw err
    })
})

app.listen(8080,'127.0.0.1',(err)=>{
    if(err)throw err
    console.log(`express server is running...`);
})