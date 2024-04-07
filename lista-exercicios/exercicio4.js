/*4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um 
script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.*/

// Função para calcular o custo final ao consumidor
function calcularCustoFinal(custoFabrica) {
    // Percentual do distribuidor e dos impostos
    const percentualDistribuidor = 0.28;
    const percentualImpostos = 0.45;

    // Calcula o custo do distribuidor e dos impostos
    const custoDistribuidor = custoFabrica * percentualDistribuidor;
    const custoImpostos = custoFabrica * percentualImpostos;

    // Calcula o custo final ao consumidor
    const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

    return custoFinal;
}

// Função para ler o custo de fábrica e exibir o custo final ao consumidor
function calcularCusto() {
    const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));

    // Verifica se o valor inserido é um número válido
    if (!isNaN(custoFabrica)) {
        const custoFinal = calcularCustoFinal(custoFabrica);
        console.log("O custo final ao consumidor é: " + custoFinal.toFixed(2));
    } else {
        console.log("Por favor, insira um valor numérico válido.");
    }
}

// Chama a função para calcular o custo final ao consumidor
calcularCusto();
