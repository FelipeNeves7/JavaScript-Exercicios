// 7. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let numero = parseInt(prompt("Insira um número:"))

do{
    console.log("Contagem regressiva: " + numero)
    numero--
} while (numero >= 0)

    console.log("Contagem regressiva finalizada!")