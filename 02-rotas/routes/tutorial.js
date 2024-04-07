//import o modulo do express
const express = require('express')
//cria um router
const router = express.Router()

//crio as minhas rotas
router.get('/tutorial', (req, rest) =>{
    res.json("Bateu no /tutorial GET")
})


router.post('tutorial', (req, res) =>{
    res.json("BATER NO /TESTE/TUTORIAL POST")
})
//exporta o router
module.exports = router
