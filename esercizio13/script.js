const random = (min, max) => Math.random() * (max - min) + min;

const month = random(1, 12);

const days = new Date(new Date().getFullYear(), month, 0).getDate();

alert(`Il mese numero ${month} ha ${days} giorni`);