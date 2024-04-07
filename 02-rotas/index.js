//imports 
const express = require ('express')

const tutorial = require('./routes/tutorial')

const contatos = require './'

//configuração de express

const app = express()

app.use(express.json())
//rotas
app.get("/", (req, res) => {
 res.send("OK")
})


app.use('/teste', tutorial)


//start da aplicação
app.listen(3000, () =>{
    console.log("Aplicação rodando em http://localhost:3000")
})