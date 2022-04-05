const random = (min, max) => Math.random() * (max - min) + min;
const num = random(101, 999);
const log = Math.log2(num);

alert(Math.round(log * 100) / 100);