const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        let filePath = path.join(__dirname, 'public', 'home.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }
        if(request.url === '/about'){
        let filePath = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data)
        })
        }
    if(request.url === '/contact'){
    let filePath = path.join(__dirname, 'public', 'contact.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(data)
    })
    }
    
     if(request.url === '/home'){
    let filePath = path.join(__dirname, 'public', 'base.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(data)
    })
    }
})

const port = 5000

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})