let fs=require('fs')

//reading the file asynchronous
fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err)throw err
    console.log(data)
    
})


// let fs=require('fs')

// fs.readFile('data.txt','utf-8',()={})