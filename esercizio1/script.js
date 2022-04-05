const response = window.confirm("Acconsenti al trattamento dei dati?");

if(response) {
	document.writeln("<h1>Autorizzazione Concessa</h1>");
}
else {
	document.writeln("<h1>Autorizzazione Negata</h1>");
}