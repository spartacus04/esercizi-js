const random = (min, max) => Math.random() * (max - min) + min;

document.writeln(`<p style="font-size: ${random(30, 40)}px;">Ciao Mondo</p>`);