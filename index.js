const http = require('http');
const {handleRoutes} = require('./app/routes/routes');

const server = http.createServer((req,res) =>{
    console.log(
        new Date().toISOString(),
        req.method,
        req.url
    );

    handleRoutes(req,res);
});

const PORT = 3000;
server.listen(PORT, () => {
console.log('Servidor rodando em http://localhost:' + PORT);
});


