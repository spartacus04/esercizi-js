const randVet = (min, max) => {
    return new Array(10).fill(0).map(() => random(min, max));
}

const random = (min, max) => Math.round(Math.random() * (max - min) + min);

const vet = randVet(random(1, 99), random(1, 99));

document.writeln('<table border="1"><tr>');

vet.forEach(e => {
    document.writeln(`<td>${e}</td>`);
});

document.writeln('</td></table>');