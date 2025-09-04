const express = require("express");
const alunoRoutes = require("./routes/alunoRoutes");
const porta = 3000;

app = express();

// Permite lidar com corpo da requisição em JSON ou URLEncoded
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Usa as rotas definidas no arquivo de rotas
app.use( alunoRoutes );

app.listen( porta, () => {
    console.log(`Servidor iniciado na porta ${porta}`);
})
