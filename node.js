const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Program() {
    read.question('Qual o seu nome? ', (valor1) => {
        read.question('Quanto você tem de exp? ', (valor2) => {
            CalculateLevel(valor1, parseFloat(valor2))
            read.close()
        })
    })
}

function CalculateLevel(nome, exp) {
    const levels = [
        [1001, "Ferro"],
        [2001, "Bronze"],
        [5001, "Prata"],
        [7001, "Ouro"],
        [8001, "Platina"],
        [9001, "Ascendente"],
        [10001, "Imortal"]
    ]

    if (exp < 0) {
        exp = 0
        console.log(`O Herói de nome ${nome} está no nível de Ferro`);
    }

    for (let i = 0; i < levels.length; i++) {
        if (exp < levels[i][0]) {
            console.log(`O Herói de nome ${nome} está no nível de ${levels[i][1]}`);
            return
        }
    }
    console.log(`O Herói de nome ${nome} está no nível de Radiante`);
}

Program()