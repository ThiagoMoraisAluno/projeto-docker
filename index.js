// Criando uma aplicação simples para exibir uma menssagem no navegador
//criando uma constante para o express
const express = require('express')  //require express(chamando o módulo)
const app = express() //estanciando o app
const port = 3000 //definindo uma porta para expor a aplicação

//criando uma rota barra para poder acessar
app.get('/', (req,res) =>{ //Criando dois parâmetros, req(requisição) res(resposta)
    res.send('Olá Docker! Atualização!') //Mandando uma menssagem para o navegador e imprimindo na tela rodando a aplicação de fato.
});

app.listen(port, () =>{ //Configurando a porta, mandando ela escutar a porta que defini lá em cima.
    console.log(`App rodando na porta: ${port}`) //Passando  uma menssagem para o console, utilizando template strings.
})