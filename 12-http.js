const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home page')
    }
    if(req.url === '/contact'){
        res.end('Here is the contact page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">back home</a>
    `);
})

server.listen(5000)