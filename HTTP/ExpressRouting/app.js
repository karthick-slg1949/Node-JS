import express from 'express'
import userRouter from './Routing/userRouter.js'
import prodRouter from './Routing/prodRouter.js'
import morgan from 'morgan'

//create express app
let app=express()
app.use(morgan('tiny'))

app.use('/user',userRouter)
app.use('/product',prodRouter)

app.listen(8080,"127.0.0.1",(err)=>{
    console.log(`server is running`);
})