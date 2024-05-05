import express from 'express';
const host = '0.0.0.0';
const porta = 3000;
const app = express();
var lista = [];

app.use(express.static('./publico'));
app.use('/cadastrar',(requisicao,resp)=>{
    const nome = requisicao.query.nome;
    const cnpj = requisicao.query.cnpj;
    const telefone = requisicao.query.telefone;
    const produto = requisicao.query.produto;

    lista.push({
        nome: nome,
        cnpj: cnpj,
        telefone: telefone,
        produto: produto
    });
    resp.write('<!DOCTYPE html>');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<meta charset="utf-8">');
    resp.write('<title>Cadastro</title>');
    resp.write('</head>');
    resp.write('<body>');
    resp.write(`<h1>${nome} cadastrado com sucesso!</h1>`);
    resp.write('<a href="/cadastro.html">Novo cadastro.</a>');
    resp.write('<br>');
    resp.write('<a href="/listar">Listar cadastros.</a>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
});
app.use('/listar',(requisicao,resp)=>{
    resp.write('<!DOCTYPE html>');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<meta charset="utf-8">');
    resp.write('<title>Listar</title>');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write("<h1 class='text-center mt-3'>Lista de Fornecedores</h1>");
    resp.write('<br>');
    resp.write('<br>');
    resp.write('<div class="container">');
    resp.write('<table class="table table-dark table-striped-columns">');
    resp.write('<tr>');
    resp.write('<th class="text-center">Nome da Empresa</th>');
    resp.write('<th class="text-center">CNPJ</th>');
    resp.write('<th class="text-center">Telefone</th>');
    resp.write('<th class="text-center">Produto</th>');
    resp.write('</tr>');
    for(let i=0; i<lista.length; i++){
        resp.write('<tr>');
        resp.write(`<td>${lista[i].nome}`);
        resp.write(`<td>${lista[i].cnpj}`);
        resp.write(`<td>${lista[i].telefone}`);
        resp.write(`<td>${lista[i].produto}`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write('<a href="/">Inicio</a>');
    resp.write('</div>');
    resp.write('</body>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>');
    resp.write('</html>');
    resp.end();
});
app.listen(porta, host, () => {
    console.log(`Servidor esta executando em http://${host}:${porta}`);
});