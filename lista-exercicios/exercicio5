/*5. O custo de um carro novo ao consumidor é a soma do custo de fábrica 
com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script 
para ler o custo de fábrica de um carro, a porcentagem do
 distribuidor e o imposto, e calcular e escrever o custo final ao consumidor */

 // Função para calcular o custo final ao consumidor
function calcularCustoFinal(custoFabrica, percentualDistribuidor, percentualImpostos) {
    // Calcula o custo do distribuidor e dos impostos
    const custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
    const custoImpostos = custoFabrica * (percentualImpostos / 100);

    // Calcula o custo final ao consumidor
    const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

    return custoFinal;
}

// Função para ler o custo de fábrica, percentual do distribuidor e dos impostos, e exibir o custo final ao consumidor
function calcularCusto() {
    const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));
    const percentualDistribuidor = parseFloat(prompt("Digite a porcentagem do distribuidor (%):"));
    const percentualImpostos = parseFloat(prompt("Digite a porcentagem de impostos (%):"));

    // Verifica se os valores inseridos são números válidos
    if (!isNaN(custoFabrica) && !isNaN(percentualDistribuidor) && !isNaN(percentualImpostos)) {
        const custoFinal = calcularCustoFinal(custoFabrica, percentualDistribuidor, percentualImpostos);
        console.log("O custo final ao consumidor é: " + custoFinal.toFixed(2));
    } else {
        console.log("Por favor, insira valores numéricos válidos.");
    }
}

// Chama a função para calcular o custo final ao consumidor
calcularCusto();
