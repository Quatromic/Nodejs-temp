const http = require('http')
//request,response
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        console.log("Hello World")
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end("Here is our short history")
    }
    res.end(`
            <h1>Hello world</h1>
            <p>Welcome to the page</p>
            <a href="/">Some think here</a> 
    `)
})

server.listen(2000,() => {
    console.log("Server is listening at port 2000")
})