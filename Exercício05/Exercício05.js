const prompt = require('prompt-sync')();

let idadeEmDias;
let anos = 0, meses = 0, dias = 0;

idadeEmDias = prompt("Entre com a idade em dias: ")

anos = parseInt(idadeEmDias/365);
idadeEmDias = idadeEmDias % 365;
meses = parseInt(idadeEmDias / 30);
idadeEmDias = idadeEmDias % 30;
dias = idadeEmDias

console.log(anos + "anos" + meses + "meses" + dias + "dias!" ); 