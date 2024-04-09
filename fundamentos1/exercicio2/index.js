const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir o parsing de JSON
app.use(express.json());

// 1. Calcular o estoque médio de uma peça
app.post('/estoque-medio', (req, res) => {
  const { quantidadeMinima, quantidadeMaxima } = req.body;
  const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;
  res.json({ estoqueMedio });
});

// 2. Reajuste de salário
app.post('/reajuste-salario', (req, res) => {
  const { salario } = req.body;
  if (salario < 1000) {
    const salarioReajustado = salario * 1.3;
    res.json({ salarioReajustado });
  } else {
    res.json({ mensagem: 'Funcionário não tem direito ao aumento.' });
  }
});

// 3. Calcular o salário total do vendedor
app.post('/salario-vendedor', (req, res) => {
  const { nome, salarioFixo, totalVendas, percentualComissao } = req.body;
  const salarioTotal = salarioFixo + (totalVendas * percentualComissao / 100);
  res.json({ nome, salarioTotal });
});

// 4. Calcular velocidade média do piloto
app.post('/velocidade-media', (req, res) => {
  const { nomePiloto, distancia, tempo } = req.body;
  const velocidadeMedia = distancia / tempo;
  res.json({ nomePiloto, velocidadeMedia });
});

// 5. Reajuste de salário com base em regras
app.post('/reajuste-salario-regras', (req, res) => {
  const { salario } = req.body;
  const salarioReajustado = salario <= 2000 ? salario * 1.5 : salario * 1.3;
  res.json({ salarioReajustado });
});

// 6. Calcular peso ideal de uma pessoa
app.post('/peso-ideal', (req, res) => {
  const { altura, sexo } = req.body;
  let pesoIdeal;
  if (sexo === 'masculino') {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo === 'feminino') {
    pesoIdeal = 62.1 * altura - 44.7;
  }
  res.json({ pesoIdeal });
});

// 7. Calcular maior preço e média de preços de produtos
app.post('/maior-preco-media', (req, res) => {
  const { precos } = req.body;
  const maiorPreco = Math.max(...precos);
  const mediaPrecos = precos.reduce((acc, curr) => acc + curr, 0) / precos.length;
  res.json({ maiorPreco, mediaPrecos });
});

// 8. Calcular novo salário com base no cargo
app.post('/novo-salario', (req, res) => {
  const { salario, codigoCargo } = req.body;
  let percentualAumento;
  switch (codigoCargo) {
    case 101:
      percentualAumento = 0.05;
      break;
    case 102:
      percentualAumento = 0.075;
      break;
    case 103:
      percentualAumento = 0.1;
      break;
    default:
      percentualAumento = 0.15;
  }
  const novoSalario = salario * (1 + percentualAumento);
  const diferencaSalario = novoSalario - salario;
  res.json({ salarioAntigo: salario, novoSalario, diferencaSalario });
});

// 9. Calcular salário a receber do funcionário
app.post('/salario-receber', (req, res) => {
  const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body;
  const valorHora = salarioMinimo / 5;
  const salarioMes = horasTrabalhadas * valorHora;
  const acrescimoDependentes = dependentes * 32;
  const valorHoraExtra = valorHora * 1.5;
  const salarioHorasExtras = horasExtras * valorHoraExtra;
  const salarioBruto = salarioMes + acrescimoDependentes + salarioHorasExtras;
  let irrf;
  if (salarioBruto < 2000) {
    irrf = 0;
  } else if (salarioBruto <= 5000) {
    irrf = salarioBruto * 0.1;
  } else {
    irrf = salarioBruto * 0.2;
  }
  const salarioLiquido = salarioBruto - irrf;
  const gratificacao = salarioLiquido <= 3500 ? 1000 : 500;
  const salarioReceber = salarioLiquido + gratificacao;
  res.json({ salarioReceber });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
