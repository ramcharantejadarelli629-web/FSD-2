import http from 'http';
const server = http.createServer((req, res) => {
    //create a student post http://localhost:4000/students
    if(req.method === 'POST' && req.url === '/students') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>Student created</h1>');
        res.end();
    } 
    //get all students GET http://localhost:4000/students
    else if(req.method === 'GET' && req.url === '/students') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>All students</h1>');
        res.end();
    }
    //get a student by id GET http://localhost:4000/students/1
    else if(req.method === 'GET' && req.url.startsWith('/students/')) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>Student Details</h1>');
        res.end();
    }
    //update a student by id PUT http://localhost:4000/students/:id
    else if(req.method === 'PUT' && req.url.startsWith('/students/')) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>Student updated</h1>');
        res.end();
    }
    //delete a student by id DELETE http://localhost:4000/students/:id
    else if(req.method === 'DELETE' && req.url.startsWith('/students/')) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>Student deleted</h1>');
        res.end();
    }
    //if the route is not found
    else {
        res.writeHead(404, {'Content-type': 'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});