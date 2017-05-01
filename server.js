var express = require('express');
var app = express(),
server=require('http').createServer(app);
path=require('path');
var fs=require('fs');
var bodyParser = require('body-parser');
app.use(express.static('./public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static('./cssjs'));
//app.use(formidable.parse());

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});



app.post('/node/public',urlencodedParser, function (req, res) {
    var tmp_path=req.files.miarchivo.path;
    var tipo=req.files.miarchivo.type;
    alert(tmp_path);
});



app.listen(3000,function(){
    console.log("Working on port 3000");
});