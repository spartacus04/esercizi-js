import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const count = fs.readdirSync(process.cwd()).length - 3;

fs.mkdirSync(`esercizio${count}`);
fs.readdirSync(path.join(process.cwd(), 'template')).forEach(file => {
	fs.copyFileSync(path.join(process.cwd(), 'template', file), path.join(process.cwd(), `esercizio${count}`, file));
});

exec(`code -r esercizio${count}/script.js`);