const prompt =  require('prompt-sync')();

let idade = prompt("Entre com a sua idade: ");

if(idade >= 18){
    console.log("Adulto!");
} else{
    console.log("Criança!");
}

console.log("Seguiu o algoritimo!");