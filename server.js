const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

	
app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/views', express.static(__dirname + '/public/views'));

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/views/index.html'));
})

app.get('/clicker', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/views/clicker.html'));
})

app.get('/hangman', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/views/hangman.html'));
})

app.get('/russian_roulette', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/views/russian_roulette.html'));
})

app.get('/short_stories', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/views/short_stories.html'));
})

app.get('/wordlookup', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/views/wordlookup.html'));
})
