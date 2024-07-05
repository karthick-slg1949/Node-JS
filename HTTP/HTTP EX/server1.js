const http=require  ('http')
const fs=require('fs')

let server=http.createServer((req,resp)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err)throw err
        resp.end(data)
    })
})


server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`Server running http:/localhost.8080`);
})