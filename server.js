const express = require("express");
const routes = require("./routes/routes");
const path = require("path")
const connectDB = require("./database/db");

connectDB();
const app = express();

const port = process.env.port || 8081

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes); 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`localhost:${port}/`);
});