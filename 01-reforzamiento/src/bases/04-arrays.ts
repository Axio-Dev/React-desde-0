const myArray: number[] = [1, 2, 3, 4, 5, 6];

const myArray2 = [...myArray];

const myArray3: number[] = []; // Asi es como podemos inicializar arrays vacíos, diciéndole de que tipo es nuestro array

const myArray4 = []; // Asi se puede, pero TS va a inferir el tipo de dato poniéndole any[], lo mejor es decirle que tipo de dato es

myArray2.push(7);

console.log({ myArray, myArray2 })

// myArray.push(10);
// myArray.push(10);

// for (const myNumber of myArray) {
//     console.log(myNumber + 10)
// }