const random = () => Math.round(Math.random() * 99);

document.writeln('<table border=1 width="700px" height="500px">');

for (let i = 0; i < 10; i++) {
	document.writeln(`<tr><td><center>Città ${i + 1}</center></td>`);
	for (let j = 0; j < 10; j++) {
		document.writeln(`<td><center>${random()}</center></td>`);
	}
	document.writeln('</tr>');
}

document.writeln('</table>');