const random = (min, max) => Math.random() * (max - min) + min;
const time = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), random(0, 24), random(0, 60), random(0, 60));

alert(time.toLocaleTimeString());

if(time.getHours() < 12) {
	document.writeln(`Mancano ${Math.abs(time.getHours() - 11)} ore e ${60 - time.getMinutes()} minuti per mezzanotte`);
}
else {
	document.writeln(`La mezzanotte è passata da ${time.getHours() - 12} ore e ${time.getMinutes()} minuti`);
}