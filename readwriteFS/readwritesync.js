// import fs from 'fs'

// let data=fs.readFileSync('emp.txt','utf-8')
// fs.writeFileSync('data.txt','data')


const fs=require('fs')

let empdata=fs.readFileSync('emp.txt','utf-8')
fs.writeFileSync('data1.txt','empdata')
console.log("Employee Data Write into new file ie data1.txt")