const randVet = (min, max) => {
    return new Array(100).fill(0).map(() => random(min, max));
}

const random = (min, max) => Math.round(Math.random() * (max - min) + min);

const vet = randVet(random(1, 99), random(1, 99));

const toSearch = +prompt('Inserisci un numero da cercare (tra 1 e 99 compresi)');

let num = 0;

vet.forEach(e => {
    if(e == toSearch) num++;
})

document.writeln(`Il numero ${toSearch} è ripetuto ${num} volte`)

document.writeln('<table border="1"><tr>');

let counter = 0;

vet.forEach(e => {
    if(counter == 10) {
        document.writeln('</tr><tr>');
        counter = 0;
    }
    document.writeln(`<td${e == toSearch ? ' style="background-color: red; color: white;"' : ''}>${e}</td>`);
    counter++;
});

document.writeln('</td></table>');