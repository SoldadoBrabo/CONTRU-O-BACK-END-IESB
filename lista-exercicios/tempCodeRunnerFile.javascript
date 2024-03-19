function calcularPercentual(votos, totalEleitores) {
        return (votos / totalEleitores) * 100;
    }
    
    function main() {
        // Entrada de dados
        let totalEleitores = parseInt(prompt("Digite o número total de eleitores: "));
        let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
        let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
        let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));
    
        // Cálculo dos percentuais
        let percentualBrancos = calcularPercentual(votosBrancos, totalEleitores);
        let percentualNulos = calcularPercentual(votosNulos, totalEleitores);
        let percentualValidos = calcularPercentual(votosValidos, totalEleitores);
    
        // Saída de dados
        console.log("\nPercentual de votos brancos:", percentualBrancos, "%");
        console.log("Percentual de votos nulos:", percentualNulos, "%");
        console.log("Percentual de votos válidos:", percentualValidos, "%");
    }
    
    main();