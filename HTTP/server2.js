import fs from 'fs'
import path from 'path'
import http from 'http'

let server=http.createServer((req,resp)=>{
    console.log(req.url);
    if(req.url==='/' || req.url==='/index'){
        fs.readFile(path.join(process.cwd(),"web","html","index.html"),'utf-8',(err,data)=>{
            if(err)throw err
            resp.end(data)
        })
    }
    if(req.url==='/About'){
        fs.readFile(path.join(process.cwd(),"web","html","About.html"),'utf-8',(err,data)=>{
            if(err)throw err
            resp.end(data)
        })

    }
    else if(req.url==='/Service'){
        fs.readFile(path.join(process.cwd(),"web","html","Service.html"),'utf-8',(err,data)=>{
            if(err)throw err
            resp.end(data)
        })

    }
    else if(req.url==='/Contact'){
        fs.readFile(path.join(process.cwd(),"web","html","Contact.html"),'utf-8',(err,data)=>{
            if(err)throw err
            resp.end(data)
        })

    }
    else{
        resp.end("page not found")
    }
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server is running on http://localhost:8080/`)
})