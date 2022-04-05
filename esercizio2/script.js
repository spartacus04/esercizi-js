document.writeln('<h1>ss/mm/hh</h1>');
const h1 = document.querySelector('h1');

h1.innerHTML = new Date().toLocaleTimeString();

setInterval(() => {
	h1.innerHTML = new Date().toLocaleTimeString();
}, 1000);