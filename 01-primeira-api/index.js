// importando modulo do express
const express = require('express')

// cria uma aplicação express
const app = express()

// construir a lógica (o contrato da minha api)
app.get("/hello", (req, res) => {
    res.send("Hello World!")
})

app.get("/nome", (req, res) => {
    res.send("João Paulo!")
})

app.get("/teste", (req, res) => {
    res.send("TESTE GET OK!")
})

app.post("/teste", (req, res) => {
    res.send("TESTE POST OK!")
})

// CRIE UMA CHAMADA PARA O RECURSO /ALUNO
// DEVOLDA NA RESPOSTA O SEU NOME JUNTO COM A SUA MATRICULA
app.get('/aluno', (req, res) => {
    res.send("Aluno: Pedro João - Matricula: 202422")
})


// PATH PARAM /pessoa/gustavo/20
app.get('/pessoa/:nome/:idade', (req, res) => {
    console.log(req.params)
    const nomePessoa = req.params.nome
    const idadePessoa = req.params.idade
    let mais18 = null
    if (idadePessoa >= 18){
        mais18 = "Maior de idade"
    } else {
        mais18 = "Menor de idade"
    }
    res.send(`
    Olá ${nomePessoa}! Tudo bem?
    Você é ${mais18}
    `)
})

//QUERY PARAM /pessoa?nome=gustavo&idade=20
app.get('/pessoa', (req, res) => {
    console.log(req.query)
    const nomePessoa = req.query.nome
    const idadePessoa = req.query.idade
    let mais18 = null
    if (idadePessoa >= 18) {
        mais18 = "Maior de idade"
    } else {
        mais18 = "Menor de idade"
    }
    res.send(`
    Olá ${nomePessoa}! Tudo bem?
    Você é ${mais18}
    `)
})

/* PARA CASA
1. Faça uma api que receba quatro notas de um aluno, 
calcule e responda a média aritmética das notas e a 
mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de 
reprovado para média inferior a 7.0. 
*/
app.get('/exercicio12', (req, res) => {
    console.log(req.query)
    const nota1 = Number(req.query.nota1)
    const nota2 = Number(req.query.nota2)
    const nota3 = Number(req.query.nota3)
    const nota4 = Number(req.query.nota4)
    
    const media = (nota1 + nota2 + nota3 + nota4) / 4

    const mensagem = media >= 7 ? "APROVADO" : "REPROVADO"
    res.send(`
    Média: ${media.toFixed(1)}
    Resultado: ${mensagem}
    `)
})


