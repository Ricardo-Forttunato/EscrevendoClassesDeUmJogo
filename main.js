class criandoClasse{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        if (this.tipo == "Guerreiro"){
            console.log(`O ${this.tipo} atacou usando Espada`)
        }else if(this.tipo == "Mago"){
            console.log(`O ${this.tipo} atacou usando Magia`)
        }else if(this.tipo == "Monge"){
            console.log(`O ${this.tipo} atacou usando Artes Marciais`)
        }else if(this.tipo == "ninja"){
            console.log(`O ${this.tipo} atacou usando Shuriken`)
        }else{
            console.log("Tipo de personagem não encontrado")
        }
    }

}

let heroi = new criandoClasse("Vitorioso", 20, "Guerreiro")

heroi.atacar()
