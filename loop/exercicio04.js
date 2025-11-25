// 4. Faça um programa que imprima os números impares de 0 a 50.

for (let numero = 0; numero <= 50; numero++) {
    if (numero % 2 !== 0) {
        console.log(numero)
    }
}

for (let num = 1; num <= 50; num += 2) {
    console.log(num)
}