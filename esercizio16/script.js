let input;
let year;

do {
	input = +prompt("Inserisci un numero tra 1 e 12");
} while (input < 1 || input > 12);

if(input == 2) {
	year = +prompt("Inserisci un anno");
}

document.writeln(`<center><h1 style="font-family: calibri; font-size: 20px; color: green;">Il mese numero ${input} ha ${new Date(year ?? new Date().getFullYear(), input, 0).getDate()} giorni</h1></center>`);