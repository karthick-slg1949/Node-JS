import express from 'express'
import path from 'path'

let app=express()
app.get('/',(req,resp)=>{
    resp.send("Root request")
    
})

app.listen(8080,'127.0.0.1',(err)=>{
    if(err)throw err
    console.log(`express server is running`);
})