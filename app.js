var express = require("express")
var app = express()

app.listen(3000, function(){
	console.log("Listening on port 3000")
})

app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html")
	console.log("Enter index.html")
})

app.get('/index', function(req, res){
	res.sendFile(__dirname + "/index.html")
	console.log("Enter index.html")
})

app.get('/lobby.html', function(req,res){
	res.sendFile(__dirname + "/lobby.html")
	console.log("Enter lobby.html")
})

app.get('/lobby', function(req, res){
	console.log("Enter lobby.html")
	res.sendFile(__dirname + "/lobby.html")
})

app.use(express.static("public"))