const prompt = require('prompt-sync')();


for (let i = 0; i < 5; i++) {
    let valor = Number(prompt('Insira seu número: '));
    /*console.log(Verificacao(valor));*/
    if (Verificacao(valor) == true) {
        console.log("O número é par!")
    }
    else {
        console.log("O número é impar!")
    }
}

function Verificacao(n) {
    if (n %2 == 0) {
        return true;
    }
    /*else{
        return false;
    }*/
}

