import http from "http";
const server = http.createServer((req,res) => 
{
    res.writeHead(200,{
        "content-type":"text/html",
    });
    res.write("<h1>My Server</h1>");
    res.write("<P> this is my response from server</p>");
    res.end();
});
server.listen(3000,() => {
    console.log("Server is running at http://localhost:3000");
});