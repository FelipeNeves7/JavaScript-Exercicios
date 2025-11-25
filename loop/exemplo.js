//For - loop contato 

//Contador do 0 a 10
// for(inicializador; condição; contador)

// for (let num = 0; num <= 10; num++) {
//     console.log("Eu vim Barganhar " + num)
// }

// While - loop condicional
// let salario = 1000
// while (salario < 5000) {
//     // salario = 100 + salario 
//     salario += 100

//     console.log("O salário é de R$: " + salario)
// }

// // Do while - loop condicional 
// let aumento = 1000;

// do{ 

// console.log("Esse é o seu saldo: " + aumento)
// aumento += 100
// // aumento = 100 + aumento

// } while (aumento < 5000)


//Array
let frutas = ["Banana", "Laranja", "Pêssego", "Melancia", "Uva", "Morango"]

// console.log(frutas[3])
// console.log(frutas[4])

//ForEach => percorre uma lista
frutas.forEach(lista => {
    console.log("A fruta é: " + lista)
})

//Percorrer uma lista com for

for (let indice = 0; indice < frutas.length; indice++) {
    console.log(frutas[indice])

    if (frutas[indice] == "Uva") {
        console.log("Eu gosto de " + frutas[indice])
    }
}
