var catMe = require('cat-me')
console.log(catMe());

const http = require("http")
let server = http.createServer((rej,res)=>{
    res.end("Hello world from the server ")
} )

server.listen(3000, () => {
    console.log("server is running on port 3000");
    
 })