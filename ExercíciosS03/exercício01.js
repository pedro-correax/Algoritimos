const prompt = require("prompt-sync")();

let N1 = Number(prompt("Entre com N1: "))
let N2 = Number(prompt("Entre com N2: "))

if( N1 == N2){
    console.log("Os números são iguais")
}else{
    console.log("O número " + N1 + " é diferente de " + N2)
}

if( N1 != N2){
     if(N1 > N2){
        console.log(N1 + " é maior que " + N2)
     }else{
        console.log(N2 + " é maior que " + N1)
     }   
}
