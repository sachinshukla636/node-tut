const http=require('http');

//creating server

http.createServer((req,res)=>{
    res.write("<h1>This is Sachin Shukla</h1>");
    res.end();
}).listen(4500)