
// window.alert("Se você leu isso, parabéns!") 
//Alert - Apresenta uma mensagem na tela

// window.confirm("O Jonas vai casar!"); 
//Confirm - Pergunta com ok/ cancela (Retorna um True ou False)

// window.prompt("Qual o seu nome ?") 
//prompt - Pega o texto da tela

// console .log("Multimidia")

// let nome = prompt("Informe o seu nome: ")

// console.log("Bem vindo! " + nome)

// let = numero1 = Number.parseInt(prompt("Digite o primeiro número: "))
// let = numero2 = Number.parseInt(prompt("Digite o segundo número: "))

// let resultado = numero1 + numero2

// console.log(resultado)

// let = numero1 = Number.parseFloat(prompt("Digite o primeiro número: "))
// let = numero2 = Number.parseFloat(prompt("Digite o segundo número: "))

// let resultado = numero1 + numero2

// console.log(resultado)
// Exibe o resultado da última soma no console.


let idade = window.prompt("Qual sua idade ?")

if (idade >= 18) {
    console.log("Maior de idade!")
} else {
    console.log("Você é menor de idade!")
}

switch (idade) {
    case "18":
        console.log("Você é maior de idade!")
        break;

    case "27":
        console.log("Está perto dos 30!")
        break;

    default:
        console.log("Nada a dizer")
        break;
}