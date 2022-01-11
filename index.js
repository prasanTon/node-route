//import http module for create web server 
const http = require('http')
//import path module 
const path = require('path')

//import file module
const fs = require('fs') 



//read file html 
const getPage = (page) => { 
    const filePath = path.join(__dirname,page)
    return fs.readFileSync(filePath)
}



//create server 
http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html')
    
    if(req.url === '/' ){
        res.write(getPage('index.html'))
    }else if(req.url === '/about'){
        res.write(getPage('about.html'))
    } 


    res.end()
}).listen(3000)



