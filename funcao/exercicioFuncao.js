// Fazer um menu de exercícios utilizando os exemplos e
// exercícios feitos em aula.
// • Cada exercício deve ser encapsulado em uma função, e
// o menu deve executar essas funções;
// • O usuário poderá escolher qual exercício ele quer
// visualizar;
// • O usuário deverá digitar 0 para sair do menu;

let opcaoEscolhida = 0;
do {
    opcaoEscolhida = parseInt(prompt(`
        =========MENU DE EXERCÍCIOS=========
    
Escolha um número para executar os exercicios:

Digite um número das opções:
0 - Sair
1 - Login
2 - Par ou Ímpar
3 - Tabuada
4 - Média aluno
5 - Contagem regressiva
===========================

`));

    switch (opcaoEscolhida) {

        case 0:
            alert("Obrigado! Volte sempre")
            break;

        case 1:
            login();
            break;

        case 2:
            parOuImpar();
            break;

        case 3:
            tabuada();
            break;

        case 4:
            mediaAluno();
            break;

        case 5:
            contagemRegressiva();
            break;

        default:
            alert("Opção invalida! Escolha uma opção que exista no sistema")
            break;
    }
}
while (opcaoEscolhida != 0);

function login() {
    let login = window.prompt("Digite seu login: ")
    let senha = window.prompt("Digite sua senha: ")

    if (login == "admin" && senha == "senha123") {
        alert("Login bem-sucedido!")
    }
    else {
        alert("Você não tem permissão de acesso!")
    }
}
window.prompt("Informe o número para executar os exercícios 1 a 5 (digite 0 para)")

function parOuImpar() {

    let numero = parseInt(prompt("Informe um número inteiro: "))

    if (numero % 2 == 0) {
        alert("O número par ")
    } else {
        alert("O número é impar")
    }
}
function tabuada() {
    let n = parseInt(prompt("Informe um número inteiro para ver a tabuada: "))

    for (let tabuada = 1; tabuada <= 10; tabuada++) {
        alert(n + " X " + tabuada + " = " + n * tabuada)
    }
}

function mediaAluno() {
    let nota01 = parseFloat(prompt("Digite sua nota de portugês: "))
    let nota02 = parseFloat(prompt("Digite sua nota de matemática: "))
    let nota03 = parseFloat(prompt("Digite sua nota de inglês: "))
    let nota04 = parseFloat(prompt("Digite sua nota de física: "))

    let media = (nota01 + nota02 + nota03 + nota04) / 4

    alert("A média do aluno é: " + media)

    if (media >= 7) {
        alert("Aprovado!")
    }

    else if (media > 5 && media < 7) {
        alert("Recuperação")
    }

    else {
        alert("Reprovado!")
    }
}

function contagemRegressiva() {
    let numero = parseInt(prompt("Insira um número:"))

    do {
        alert("Contagem regressiva: " + numero)
        numero--
    } while (numero >= 0)

    alert("Contagem regressiva finalizada!")
}