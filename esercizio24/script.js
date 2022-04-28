const filterMax = (arr) => {
    arr.sort((a, b) => a - b);
    const clone = Array.from(arr);
    clone.pop();

    return clone;
}

const randArr = (n) => {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
}

const printLn = (arr) => {
    const table = document.createElement('table');
    table.style.backgroundColor = 'green';
    const row = table.insertRow(0);
    
    for (let i = 0; i < arr.length; i++) {
        const cell = row.insertCell(i);
        cell.innerHTML = arr[i];
    }

    document.body.appendChild(table);
}

const arr = randArr((Math.floor(Math.random() * 2) + 1) * 10);
const newArr = filterMax(arr);

printLn(arr);
printLn(newArr);