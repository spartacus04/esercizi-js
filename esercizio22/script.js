const randVet = (min, max) => {
    const vet = [];

    for(let i = 0; i < 10; i++) {
        vet.push(random(min, max, vet));
    }

    return vet;
}

const random = (min, max, excludes = []) =>  {
    let num;

    do {
        num = Math.round(Math.random() * (max - min) + min);
    } while (excludes.includes(num));

    return num;
}

const vet = randVet(random(1, 99), random(1, 99));

vet.sort((a, b) => a - b);

document.writeln('<table border="1"><tr>');

vet.forEach(e => {
    document.writeln(`<td>${e}</td>`);
});

document.writeln('</td></table>');