// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const listSpesa = [
    'pomodori',
    'pomodori1',
    'pomodori2',
    'pomodori3',
    'pomodori4'
]

let spesaEl = document.querySelector('p');
let j = 0;

while (j < listSpesa.length) {
    const product = listSpesa[j] 
    console.log(product); 
    j++  
}


