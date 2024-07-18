//ES 5 
const fs=require ('fs')

//reading the file synchronous
// let svg=fs.readFileSync('svg.txt','utf-8')
// console.log(svg);

//reading the file asynchronous
newdata=fs.readFile('svg.txt','utf-8',(err,newdata)=>{
    // console.log(newdata);
    fs.writeFile('one.txt',newdata,(err)=>{
        if(err)throw err
        console.log('writing successfully');
    })
})