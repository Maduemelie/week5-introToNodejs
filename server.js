const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

const server = http.createServer((req, res)=>{
    switch (req.url) {
        case "/":
            fs.readFile(path.join(__dirname, "public", 'index.html'), "utf8",(err, data)=>{
                if(err){
                    res.writeHead(400)
                    res.end("An error occured")
                }
                res.writeHead(200)
                res.end(data)
                
            })
          
            break;
         
        case "/about":
            fs.readFile(path.join(__dirname, "public", 'about.html'), "utf8",(err, data)=>{
                if(err){
                    res.writeHead(400)
                    res.end("An error occured")
                }
                res.writeHead(200)
                res.end(data)
                
            })
          
            break;
        case "/contact":
            fs.readFile(path.join(__dirname, "public", 'contact.html'), "utf8",(err, data)=>{
                if(err){
                    res.writeHead(400)
                    res.end("An error occured")
                }
                res.writeHead(200)
                res.end(data)
                
            })
          
            break;
        case "/home":
            fs.readFile(path.join(__dirname, "public", 'index.html'), "utf8",(err, data)=>{
                if(err){
                    res.writeHead(400)
                    res.end("An error occured")
                }
                res.writeHead(200)
                res.end(data)
                
            })
          
            break;
        default:
            res.writeHead(404);
            res.end("page not found")
    }
})

server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})