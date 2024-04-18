const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.json("OK");
});

const pessoasRouter = require('./routes/pessoas');
app.use('/pessoas', pessoasRouter);

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})()
