//usando objeto express
const express = require("express");
//App de express
const app = express();
app.use(express.json()); //Indicamos que usaremos JSON

const port = 3000;

//Inicializando app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/v1/explorers', (req, res)=>{
  console.log(`Api Explorers GET ALL requqest ${new Date()}`)
  const explorer1 = {id:1, name: "Alex1"}
  const explorer2 = {id:2, name: "Alex2"}
  const explorer3 = {id:3, name: "Alex3"}
  const explorer4 = {id:4, name: "Alex4"}
  const explorers = [explorer1, explorer2, explorer3, explorer4]
  res.status(200).json(explorers)
})

//Endpoint que regresa explorer mediando un ID
app.get('/v1/explorers/:id', (req,res) =>{
  console.log(`Api Explorers GET request ${new Date()}`)
  console.log(`Getting explorer with id ${req.params.id}`)
  const explorer = {id: 1, name: "Alex"}
  res.status(200).json(explorer)
})

//Endpoint POST
app.post('/v1/explorers', (req,res) =>{
  console.log(`Api Explorers POST reques ${new Date()}`)
  const requestBody = req.body // Parametros de un cliente
  res.status(201).json({message: 'Created'})
})

//Endpoint PUT para actualizar
app.put('/v1/explorers/:id', (req,res) =>{
  console.log(`Api Explorers PUT request ${new Date()}`)
  console.log(`Update explorer with id ${req.params.id}`)
  const requestBody = req.body
  res.status(200).json({message: 'Updated!'})
})