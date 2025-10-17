const http = require('http');

const server = http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type' : 'text/plain; charset = UTF-8'
    });
        res.end('Servidor Node.js está funcionando');
    });

    server.listen(3000, ()=> {
        console.log('O servidor está rodando em http://localhost:3000');
    });

