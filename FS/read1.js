let fs=require('fs')

fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err)throw error
    console.log(data)
    
})


// let fs=require('fs')

// fs.readFile('data.txt','utf-8',()={})