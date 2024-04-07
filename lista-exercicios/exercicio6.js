/*6. Uma revendedora de carros usados paga a seus funcionários 
vendedores um salário fixo por mês, mais uma comissão também fixa para 
cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 
Escrever um script que leia o número de carros por ele vendidos, 
o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido.
 Calcule e escreva o salário final do vendedor.
*/

// Função para calcular o salário final do vendedor
function calcularSalarioFinal(numCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro) {
    // Calcula a comissão total baseada no número de carros vendidos e na comissão por carro
    const comissaoTotal = numCarrosVendidos * comissaoPorCarro;

    // Calcula 5% do valor total das vendas
    const cincoPorcentoVendas = valorTotalVendas * 0.05;

    // Calcula o salário final somando o salário fixo, a comissão total e 5% do valor total das vendas
    const salarioFinal = salarioFixo + comissaoTotal + cincoPorcentoVendas;

    return salarioFinal;
}

// Função para ler os dados do vendedor e calcular o salário final
function calcularSalario() {
    const numCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
    const valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));
    const salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
    const comissaoPorCarro = parseFloat(prompt("Digite o valor da comissão por carro vendido:"));

    // Verifica se os valores inseridos são números válidos
    if (!isNaN(numCarrosVendidos) && !isNaN(valorTotalVendas) && !isNaN(salarioFixo) && !isNaN(comissaoPorCarro)) {
        const salarioFinal = calcularSalarioFinal(numCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro);
        console.log("O salário final do vendedor é: " + salarioFinal.toFixed(2));
    } else {
        console.log("Por favor, insira valores numéricos válidos.");
    }
}

// Chama a função para calcular o salário final do vendedor
calcularSalario();
