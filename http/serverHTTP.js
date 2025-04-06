var http = require('http')

// "function", transferred to "createServer",
// is what you call a "Callback function".
// It's a function, passed as a parameter to another function, for future reference.
// in this case, "function" is activated every time there's a new request coming to the server.
http.createServer(function(request, response) {
    response.writeHead(200, {'Context-Type':'text/plain'})
    response.end('End with Hello World\n')
}).listen(8000)

console.log('Server running at http://127.0.0.1:8000')

