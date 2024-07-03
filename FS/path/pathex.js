//how to find current working directory
//how to finnd current working file
// const path=require('path')
import path from 'path'
import FS from 'FS'

const fullPath=path.join('D:\Node JS\FS\emp','data.txt')
const readFile=FS.readFileSync(fullPath,'utf-8')

console.log(readFile)