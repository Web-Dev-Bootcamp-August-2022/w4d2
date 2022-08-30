// we use the node internal http module 
const http = require('http')

const server = http.createServer(function (request, response) {
	// console.log('incoming request')
	console.log(request.url, request.method)
	if (request.url === '/') {
		response.end('<h1>This is the home page</h1>')
	} else if (request.url === '/about') {
		response.end('<h1>This is the about page</h1>')
	} else {
		response.end('<h1>404 - Document not found</h1>')
	}

})

// http://127.0.0.1:3000
// http://localhost:3000

server.listen(3000, function () {
	console.log('server listening on port 3000')
})