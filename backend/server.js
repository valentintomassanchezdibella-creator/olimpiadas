const express = require("express")
const con = require("./db")



const app = express();

app.get("/", (req, res) =>{

    res.send("hola pe")
})

app.listen(3000, () => {
    console.log("Servidor run")
})