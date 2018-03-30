var http = require('http');
var server = http.createServer(function(req, res){
	var categoria = req.url;

	if(categoria == '/noticia'){
		res.end("<html><body>Noticias do mundo da aventura</body></html>");

	}else if (categoria == '/historia'){
		res.end("<html><body>Historias do grupo minasAd</body></html>")
		
	}else if(categoria == '/hparticipantes'){
		res.end("<html><body>Historia sobre viagens dos participantes</body></html>");
	
	}else {
		res.end("<html><body>Home</body></html>");
	}
}).listen(3000);