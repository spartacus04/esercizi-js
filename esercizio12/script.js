const random = (min, max) => Math.random() * (max - min) + min;

const month = random(1, 12);
const day = random(1, 30);


const days = (month - 1) * 30 + day;

if(days < 180) {
	alert("Siamo nella prima metà dell'anno");
}
else{
	alert("Siamo nella seconda metà dell'anno");
}