// Man kan ikke lave data typer "rigtigt" i vanilla JS. Der bruger man normalt Mongoose, Sequilize (SQL) eller TypeScript (Anbefalet).
// Dette gælder både for det enkelte object, men også arrayet.
// Ved at starte objectet med værdier, kan vi "definere" typen.
const book = {
	title: '', // DataType.String
	iban: '', // DataType.String
	description: '' // DataType.String
}

var books = [
	// Array<books>
	/*
	{
		title: 'Hello',
		iban: '02123456789aaa',
		description: 'God bog'
	}
	*/
]

// module.exports tillader exportering af værdier/funktioner/classes til andre filer
module.exports.book = book;
module.exports.books = books;