const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist/Portfolio/portfolio')));
app.get('/*', function(req, res){
    res.sendFile("index.html", {root: path.join(__dirname, 'dist/Portfolio/portfolio')});
})

app.listen(process.env.PORT || 8080)