var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/clicker', function (req, res) {
    res.render('clicker');
});
app.get('/hangman', function (req, res) {
    res.render('hangman');
});
app.get('/russian_roulette', function (req, res) {
    res.render('russian_roulette');
});
app.get('/short_stories', function (req, res) {
    res.render('short_stories');
});
app.get('/wordlookup', function (req, res) {
    res.render('wordlookup');
});


var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
