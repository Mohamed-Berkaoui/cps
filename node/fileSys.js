const fs=require('fs')


const data= fs.readFileSync('./welcome.txt',"utf8")
console.log(data)