// Get the client
import mysql, { type RowDataPacket, type Connection } from 'mysql2/promise';

import express from 'express';
const app = express()

//Como cria uma rota no express?
app.get("/pessoas",async (req,res)=>{

  let connection:Connection | null = null
try {
  const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'luademel',
});
  //Como ler as pessoas no bd
  // Create the connection to database


// Using placeholders

  //const result = 
  //  await connection.execute('INSERT INTO pessoa (id,nome) VALUES (?,?)',[6,"Maria"])
  //console.log(result)

  const [dados,campos] = await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
  console.log(dados[0]);
  for (let i = 0; i < dados.length; i++) {
    const element = dados[i];
    console.log(element?.id,element?.nome)
  }
  res.status(200).json(dados)
    //console.log(result)


} catch (err) {
  if(err instanceof Error){
    if(connection)
  
  await (connection as Connection).end();
}
  console.log(err);
}
// Close the connection
 
})
app.post("pessoas",(req,res)=>{})
app.listen(8000,()=>{
  console.log("Iniciando o servidor na porta 8000")
})



interface IPessoa extends RowDataPacket{
  id:number,
  nome:string
}
