var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("<html><body>Home</body></html>");
});

app.get('/noticia',function(req,res){
	res.send("<html><body>Noticias do mundo da aventura</body></html>");
});

app.get('/historia',function(req,res){
	res.send("<html><body>Historias do grupo minasAd</body></html>");
})

app.get('/hparticipantes',function(req,res){
	res.send("<html><body>Historia sobre viagens dos participantes</body></html>");
})

app.listen(3000, function(){
	console.log("servidor rodando com express");
});