/*9. Faça um script para somar 
dois números e multiplicar o resultado pelo primeiro número.*/

// Função para somar dois números e multiplicar o resultado pelo primeiro número

function somarEMultiplicar() {
    // Solicita ao usuário para inserir os dois números
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));

    // Verifica se os valores inseridos são números válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Calcula a soma dos números
        const soma = numero1 + numero2;

        // Multiplica o resultado da soma pelo primeiro número
        const resultado = soma * numero1;

        // Exibe o resultado no console
        console.log("O resultado da soma dos números multiplicado pelo primeiro número é: " + resultado);
    } else {
        console.log("Por favor, insira valores numéricos válidos.");
    }
}

// Chama a função para realizar a operação
somarEMultiplicar();
