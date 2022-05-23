const express = require("express");
const app = express();
const cors = require('cors');
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

app.use(cors());
app.use(express.json());

// definindo a rota raiz
app.get("/", function (req, res) {
    console.log("Serviço iniciado");
});
// definindo a rota ajuda
app.get("/ajuda", function (req, res) {
    
    res.send("Página de ajuda!");
});

app.get("/cards/:filtro?", function(req,res){
    const filtro = req.params.filtro;

    if(filtro != undefined){
    MongoClient.connect(url, (err, db) => { 
        if (err) throw err;
        var dbo = db.db("piadasdb");
        dbo.collection("vagas").find({ 'cargo': {'$regex': filtro}
        })
        .sort({ _id: 1 })
        .toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
            db.close();
        });
    });
    }else{
        MongoClient.connect(url, (err, db) => { 
            if (err) throw err;
            var dbo = db.db("piadasdb");
            dbo.collection("vagas").find({})
            .sort({ _id: 1 })
            .toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.json(result);
                db.close();
            });
        });
    }
});

// executando o servidor
app.listen(8081, function () {
    console.log("Servidor na porta 8081");
});