var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname)));

app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function(){
  console.log("started listening on port 3000");
});
