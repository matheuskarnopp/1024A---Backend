//REVISANDO FUNÇÕES USADAS COM ARRAYS


// const vetor:number[] = [1,2,3,4]

//FIND

//COMO EU FAÇO UMA FUNÇÃO QUE VERIFICA SE EU
//PASSEI O 2 COMO ARGUMENTO PARA ELA
//SE SIM RETORNA "TRUE" SENÃO "FALSE"

// console.log(vetor.find((x)=>x===2))

const vetor:{id:number, nome:string, idade:number}[] = [
    {id:1, nome:"tere", idade:32},
    {id:2, nome:"terezinho", idade:12},
    {id:3, nome:"terezao", idade:67}
]
//FIND achar alguem maior de 18 anos
const resultado = vetor.find(((x)=> x.idade>=18))
console.log(resultado)
//FILTER achar alguem maior de 18
const resultado2 = vetor.filter(((x)=> x.idade>=18))
console.log(resultado2)
//MAP MAPEIA
const resultado3 = vetor.filter(((x)=> x.idade))
console.log(resultado3)