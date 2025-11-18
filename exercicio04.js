// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota01 = Number.parseFloat(prompt("Digite a nota português:"))
let nota02 = Number.parseFloat(prompt("Digite a nota de história:"))
let nota03 = Number.parseFloat(prompt("Digite a nota de matemática:"))
let nota04 = Number.parseFloat(prompt("Digite a nota de inglês:"))

let media = (nota01 + nota02 + nota03 + nota04) / 4

if (media >= 7) {
    console.log("aprovado")
}

else if (media > 5 && media < 7) {
    console.log("recuperação")
}

else{
    console.log("reprovado")
}