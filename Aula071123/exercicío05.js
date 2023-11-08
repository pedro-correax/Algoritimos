const prompt = require('prompt-sync')();

let a = [1, 0 , 5, -2, -5, 7]

let SomaDeValores = a[0] + a[1] + a[5];
console.log('A soma das posições é: ' + SomaDeValores)

a[4] = 100;

for (let i = 0; i < 6 ; i++) {
    console.log(a[i])
}