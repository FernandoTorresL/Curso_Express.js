const express= require('express');
const app = express();

app.get('/', function(req, res) {
  res.render(index, {hello: 'hola', world: 'mundo'});
});

const server = app.listen(8000, function() {
  console.log(`listening http://localhost:${server.address().port}`);
});

