import { createServer } from "node:http"; 

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Server is running');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is listening');
});
// the 127...is the host, and 3000 is a port used to define the address.

// Arrow functions
function handleRequest() {}
const handleReguest = () => {}