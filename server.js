let express = require('express');
let path = require('path');
let app = express();
let PORT = 3000;

app.use(express.static('public'));

app.get('/',(req, res)=> {
  req.sendFile(path.join(__dirname, 'public','index.html'))
})
app.listen(PORT, ()=> {
  console.log(`ok,anda bisa ketik http://localhost:${PORT}`)
})