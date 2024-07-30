import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'
import mongoose from 'mongoose'
import cors from 'cors'
import productRouter from './Routes/ProductRouter.js'
let app = express()
app.use(express.json())
app.use(urlencoded({extended:true}))

 app.use(cors())
app.use(morgan('dev'))

dotenv.config({ path: './Config/dev.config' })
let port = process.env.PORT
let host = process.env.HOST_NAME
let db_url = process.env.MONGO_DB_LOCAL_URL
app.get("/", (req, resp) => {
    resp.send("Server -Root Req")
})
app.use("/product", productRouter)
mongoose.connect(db_url)
    .then(() => {
        console.log("Mongo Db Connection Successfull!")
       
    })
    .catch((err) => {
        process.exit(1);
    })

    app.listen(port, host, (err) => {
        console.log(chalk.green(`Server is Running http://${host}:${port}/`))
    })