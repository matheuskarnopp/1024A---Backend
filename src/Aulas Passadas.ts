// let numero:number = 10
// let palavra:string = "Algum texto";
// let bol: boolean = true

// let x:number|string = 10
// x = "guilherme"
// const vetor: number[] = [1,2,3,4,5]
// vetor[2] = 10
// vetor.push(6)
// console.log(vetor)
// //vetor = [5,6,7,8,9]

// //Vetor de String

// let vetorString:string[] = ["a","b","ab"]

// type Pessoa = {
//     id?:number;
//     nome:string;
//     idade:number;
// }

// const pessoa:Pessoa = {
//     id:1,
//     nome:"Guilherme",
//     idade:18
// }

// const pessoa2:Pessoa = {
//     id:2,
//     nome:"Guilherme",
//     idade:18
// }
// pessoa.nome = "Terezinho"

// const cloudVoadora:any = []

// const batataVoadora:undefined = undefined//♥♥♥♥♥♥

// // import express from "express"
// // const app = express()
// // app.use(express.json())

// // app.get("/",(req,res)=>{
// //     res.send("Olá mundo")
// // })
// // app.listen(8000, ()=>{
// //     console.log("Meu servidor está rodando na porta 8000")
// // })




//10-03-2026
//Assincrona
// async function MinhaPromessa():Promise<string> {
//     const prom= new Promise<string>((resolve, reject) => {
//         setTimeout(()=>resolve("Tere"),5000)
//     })
//     return prom
// }
// MinhaPromessa()
// .then((valor)=> console.log(valor))
// .catch((erro)=>console.log(erro))
// console.log("Executei esse código")
// try{
//     const resultado = await MinhaPromessa()
//     console.log(resultado)
// }
// catch(erro){
//     console.log(erro)
// }

//Crie uma funcção que tenha 50% de chance de retornar tere 
//após 5 segundos ou a função devolve o valor null null
// function devolveTere()

//dia 13-03-2026


// async function devolve*-Tere(){
//     const prom = new Promise<string>((resolve, reject) => {
//         setTimeout(()=>{
//             let chance = Math.floor(Math.random() * 10) + 1
//                 if(chance >= 5)
//                      resolve("Tere")
//                 else 
//                      reject(null)
//             }
//         ,1000)
//     })
//     return prom
// }
// try {
//     const resultado = await devolveTere()
//     console.log(resultado)
// } catch (erro) {
//     console.log(erro)
// }






// //REVISANDO FUNÇÕES USADAS COM ARRAYS


// // const vetor:number[] = [1,2,3,4]

// //FIND

// //COMO EU FAÇO UMA FUNÇÃO QUE VERIFICA SE EU
// //PASSEI O 2 COMO ARGUMENTO PARA ELA
// //SE SIM RETORNA "TRUE" SENÃO "FALSE"

// // console.log(vetor.find((x)=>x===2))

// const vetor:{id:number, nome:string, idade:number}[] = [
//     {id:1, nome:"tere", idade:32},
//     {id:2, nome:"terezinho", idade:12},
//     {id:3, nome:"terezao", idade:67}
// ]
// //FIND achar alguem maior de 18 anos
// const resultado = vetor.find(((x)=> x.idade>=18))
// console.log(resultado)
// //FILTER achar alguem maior de 18
// const resultado2 = vetor.filter(((x)=> x.idade>=18))
// console.log(resultado2)
// //MAP MAPEIA
// const resultado3 = vetor.filter(((x)=> x.idade))
// console.log(resultado3)