/*8. Faça um script que determine o volume de uma
 caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura*/

// Função para calcular o volume da caixa d'água cilíndrica
function calcularVolumeCilindro(raio, altura) {
    // Constante PI
    const PI = Math.PI;

    // Calcula o volume
    const volume = PI * Math.pow(raio, 2) * altura;

    return volume;
}

// Função para ler o raio e a altura da caixa d'água e calcular o volume
function calcularVolumeCaixaDagua() {
    const raio = parseFloat(prompt("Digite o raio da caixa d'água (em metros):"));
    const altura = parseFloat(prompt("Digite a altura da caixa d'água (em metros):"));

    // Verifica se os valores inseridos são números válidos
    if (!isNaN(raio) && !isNaN(altura) && raio > 0 && altura > 0) {
        const volume = calcularVolumeCilindro(raio, altura);
        console.log("O volume da caixa d'água é: " + volume.toFixed(2) + " metros cúbicos");
    } else {
        console.log("Por favor, insira valores numéricos válidos maiores que zero.");
    }
}

// Chama a função para calcular o volume da caixa d'água cilíndrica
calcularVolumeCaixaDagua();
