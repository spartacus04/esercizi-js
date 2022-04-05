const random = (min, max) => Math.random() * (max - min) + min;
const num = random(-5, 5);
const pow = Math.pow(2, num);

alert(`2 elevato a ${num} è ${pow}`);