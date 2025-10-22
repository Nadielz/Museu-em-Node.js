const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send('Bem vindo ao Museu Virtual!');
});

app.get('/tarsila', (req,res) =>{
    res.send('Galeria da Tarsila do Amaral!');
});

app.get('/portinari', (req,res) =>{
    res.send('Galeria do Portinari!');
});

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//Forma original

/* const http = require('http');
const {handleRoutes} = require('./app/routes/routes');
 */

/* const server = http.createServer((req,res) =>{
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
}); */


