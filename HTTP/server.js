const http=require('http')

let server=http.createServer((req,resp)=>{
    resp.end("<h2>Vanga Pogalam</h2>")
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log("Server is running");
})