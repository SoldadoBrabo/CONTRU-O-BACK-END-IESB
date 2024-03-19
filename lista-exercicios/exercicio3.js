/*3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário. */

// Ler o salário mensal atual do funcionário
let salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário: "));

// Ler o percentual de reajuste
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (em %): "));

// Calcular o novo salário
let novoSalario = salarioAtual * (1 + percentualReajuste / 100);

// Exibir o valor do novo salário
console.log("O novo salário do funcionário é: R$ " + novoSalario.toFixed(2));
