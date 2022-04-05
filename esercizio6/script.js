const random = (min, max) => Math.random() * (max - min) + min;

const n1 = random(1, 9);
const n2 = random(0, 9);
const n3 = random(0, 9);

alert(`${n1}${n2}${n3}${n2}${n3}`);