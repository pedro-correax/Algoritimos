const prompt =  require('prompt-sync')();

let salarioInicial;
let reajuste;
let salarioFinal;

salarioInicial = prompt("Entre com o salario: "); 
salarioInicial = Number(reajuste);

reajuste = ("Entre com o percentual de reajuste");
reajuste = Number(reajuste);

salarioFinal = salarioInicial + (salarioInicial * reajuste / 100);

console.log("O novo salario é: " + salarioFinal);





