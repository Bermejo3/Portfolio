const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist/Portfolio')));
app.get('/*', function(req, res){
    res.sendFile("index.html", {root: path.join(__dirname, 'dist/Portfolio')});
})

app.listen(process.env.PORT || 8080)