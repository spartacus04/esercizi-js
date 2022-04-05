const input = prompt("Inserisci un voto tra 4 e 10");

const grade = +input.split(/[,.]/g)[0];
const decimal = +input.split(/[,.]/g)[1];

console.log(decimal);

const getDecimal = () => {
	if(grade == 10) return '';

	switch(decimal) {
		case NaN:
			return '';
		case 25:
			return 'più';
		case 50:
			return 'e mezzo';
		case 75:
			grade++;
			if(grade == 10) return '';
			return 'meno';
	}
};

const decimalString = getDecimal();

switch(grade) {
	case 4:
		document.writeln(`Il voto è quattro ${decimalString}`);
		break;
	case 5:
		document.writeln(`Il voto è cinque ${decimalString}`);
		break;
	case 6:
		document.writeln(`Il voto è sei ${decimalString}`);
		break;
	case 7:
		document.writeln(`Il voto è sette ${decimalString}`);
		break;
	case 8:
		document.writeln(`Il voto è otto ${decimalString}`);
		break;
	case 9:
		document.writeln(`Il voto è nove ${decimalString}`);
		break;
	case 10:
		document.writeln(`Il voto è dieci ${decimalString}`);
		break;
	default:
		document.writeln(`Il voto non è tra 4 e 10`);
		break;
}

