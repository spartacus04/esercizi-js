const input = (min = 0) => {
	let value;
	do {
		value = parseInt(prompt(`Inserisci un numero maggiore di ${min}`));
	} while(value < min);
	return value;
}

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const n1 = input();
const n2 = input(n1);

const arr = [];

for(let i = 0; i < 10; i++) {
	arr.push(random(n1, n2));
}

arr.sort((a, b) => -1 * (a - b));

arr.forEach(e => document.writeln(`<h1 style="font-family: verdana; font-size: 100px; color: blue;">${e}</h1>`));