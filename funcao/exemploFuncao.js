function cumprimento() {
    let nomePessoa = prompt("Digite seu nome:")

    let horaAtual = new Date().getHours()

    if (horaAtual > 6 && horaAtual < 12) {
        alert("Bom dia! " + nomePessoa)
    }
    else if (horaAtual >= 13 && horaAtual < 18) {
        alert("Boa tarde! " + nomePessoa)
    } else {
        alert("Boa noite! " + nomePessoa)
    }
}

cumprimento()

    let pessoa = {
        nome: "Guilherme",
        idade: 17,
        sexo: "Masculino",
        estado: "SP",
        raca: "Branca"
    }

    console.log(pessoa.nome)
    console.log(pessoa.idade)
    console.log(pessoa.raca)

    for (let chave in pessoa) {
        console.log(chave + " : " + pessoa[chave])
    }