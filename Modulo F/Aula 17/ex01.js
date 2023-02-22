let amigo = {nome: "José", 
sexo: "M", 
peso: 85.4, 
engordar(p=0){
    console.log(`Seu amigo ${this.nome} engordou ${p}kg`)
    this.peso += p
}}

console.log(`O seu amigo ${amigo.nome} pesa ${amigo.peso} Kg`)
amigo.engordar(5.6)
console.log(`O seu amigo ${amigo.nome} pesa ${amigo.peso} Kg`)
