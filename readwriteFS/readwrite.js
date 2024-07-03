const fs=require('fs')
fs.readFile('data1.txt','utf-8',(err,data1)=>{
    if(err)throw err
    console.log(data1)

    fs.writeFile('abc.txt',data1,()=>{
        if(err)throw err
        console.log("written Successfully")
    })
    
})