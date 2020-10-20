// Webserver Init
const express = require('express');
const app = express();
// Init af handlebars (templating i html)
const exphbs = require('express-handlebars');
// Init af bodyparser (for at kunne læse body af requesten)
const bodyParser = require('body-parser');

// app.use/.set/.engine er config af webserveren
// bodyParser.urlencoded fortæller serveren at vi forventer data fra form submits. Normalt bruger man app.use(bodyParser.json()), da applikationerne typisk bliver bygget som API'er i stedet for
app.use(bodyParser.urlencoded({extended: true}));

// Opsætning af Handlebars. defaultLayout definerer "grund html'en"
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
// Express kan have mange view engines, her fortæller vi Express skal bruge handlebars
app.set('view engine', 'hbs');

// Hiver exports ud af models/books, og laver en kopi af exporterede moduler. Objectet bliver til en pseudo class
const Books = require('./models/books');

// request - ALT DER KOMMER IND
// response - ALT DER KOMMER UD
// next - Send til næste 'operation' i pipen (middlewares, til f.eks. auth)
app.get('/', (request, response, next) => {
	response.render('index', {person: 'Nico', books: Books.books});
});

// Lig mærke til .post da en form sender POST requests mod servere.
app.post('/add', (request, response, next) => {
	console.log(request.body);
	// Tilføjer ny bog til arrayet af bøger
	Books.books.push(request.body);
	response.redirect('/'); // Sender brugeren tilbage til forsiden, da browseren ellers vil blive på /add efterfølgende
});

// API vejen
app.get('/api/books', (request, response, next) => {
	response.send(Books.books);
});

// Starter serveren op, og sender en besked i consollen. Bruger du VS code kan man trykke F5 og vælge Node.js, så bliver den startet op i VS code, og man kan så sætte debugger tags
app.listen(8080, () => {
	console.log('Server has start on http://localhost:8080');
});