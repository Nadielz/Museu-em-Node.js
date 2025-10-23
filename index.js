const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
const path = require('path');
app.set('views', path.join(__dirname, 'public', 'views'));

app.get('/', (req,res) =>{
    res.render('home');
});

app.get('/tarsila', (req,res) =>{
    res.render('tarsila');
});

/* app.get('/portinari', (req,res) =>{
    res.render('Galeria do Portinari!');
}); */

app.listen(3000, ()=>{
    console.log("Servidor rodando em http://localhost:3000");
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


