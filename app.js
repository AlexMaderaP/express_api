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

