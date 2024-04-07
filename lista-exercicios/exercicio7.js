/*7. Faça um script que leia duas notas de um aluno, 
calcule e escreva a média final deste aluno. Considerar que a média é
 ponderada e que o peso das notas é 4 e 6.
*/

// Função para calcular a média final do aluno
function calcularMediaFinal(nota1, nota2) {
    // Define os pesos das notas
    const pesoNota1 = 4;
    const pesoNota2 = 6;

    // Calcula a média ponderada
    const mediaFinal = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

    return mediaFinal;
}

// Função para ler as notas do aluno e calcular a média final
function calcularMedia() {
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));

    // Verifica se as notas inseridas são números válidos
    if (!isNaN(nota1) && !isNaN(nota2)) {
        const mediaFinal = calcularMediaFinal(nota1, nota2);
        console.log("A média final do aluno é: " + mediaFinal.toFixed(2));
    } else {
        console.log("Por favor, insira valores numéricos válidos.");
    }
}

// Chama a função para calcular a média final do aluno
calcularMedia();


