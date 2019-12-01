var express = require('express');

var app = express();

app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.use('/categories', (req, res) => res.json(express.static(_dirname+ '/data')))

app.listen(3000);