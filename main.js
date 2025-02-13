class Pessoa {
    constructor(nome , idade , nacionalidade) {
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
    }

    apresentação() {
        console.log(`Oi eu me chamo ${this.nome}, tenho ${this.idade} anos e minha nacionalidade é ${this.nacionalidade}`)
    }
}

class Estudante extends Pessoa {
    constructor(nome , idade , nacionalidade , anoLetivo) {
        super(nome, idade, nacionalidade)
        this.anoLetivo = anoLetivo
    }

    apresentação() {
        super.apresentação()
        console.log(`Eu estou matriculado no ${this.anoLetivo} letivo`)
    }
}

class Trabalhador extends Pessoa {
    constructor(nome , idade , nacionalidade , cargo) {
        super(nome , idade , nacionalidade)
        this.cargo = cargo
    }

    apresentação() {
        super.apresentação()
        console.log(`Eu trabalho como ${this.cargo}`)
    }
}

const estudante1 = new Estudante('Gustavo' , 14 , 'Brasileiro' , '9 ano')
const trabalhador1 = new Trabalhador('Jorge' , 32 , 'Brasilerio' , 'dev-full-stack')
const trabalhador2 = new Trabalhador('Bruna' , 28 , 'Brasilerio' , 'professora')

estudante1.apresentação()
trabalhador1.apresentação()
trabalhador2.apresentação()


