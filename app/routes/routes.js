
//Forma Original com HandleRoutes
/* function handleRoutes(req,res){
    const url = new URL(req.url, 'http://' + req.headers.host);
    const path = url.pathname;
    const method = req.method;

    res.setHeader('Content-Type','text/plain;charset=utf-8');

    if(path === '/' && method ==='GET'){
        return res.end('Página Inicial');
    }

    if(path === '/sobre' && method ==='GET'){
        return res.end('Sobre nós');
    }

    if(path === '/contato' && method ==='POST'){
        let body = '';
        req.on('data', chunk => (body += chunks));
        req.on('end', () => {
            return res.end('Dados recebidos: ' + body);
        });
    return;
    }

    if(path === '/api' && method === 'GET'){
        res.setHeader('Content-Type','application/json; charset=utf-8');

        return res.end(JSON.stringify({
            ok: true,
            mensagem: 'Hello API',
            timestamp: Date.now()
        }));
    }
    
    res.statusCode = 404;
    return res.end('Rota não encontrada');
}

module.exports = { handleRoutes }; */