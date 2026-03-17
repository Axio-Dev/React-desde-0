let firstName = 'Axel';
const lastName: string = 'Vazquez'; /* En los const se le puede asignar el tipo de variable explícito con cons varName: tipoDato = algo */

/* Const es para variables que nunca van a cambiar y let para variables que pueden cambiar */

const containsLetterA = lastName.includes('A');
console.log(firstName, lastName);
console.log({ containsLetterA, firstName, lastName }); /*Se puede poner entre {} para imprimir el nombre de la variable*/

let diceNumber = 3;
diceNumber = 3;

console.log({ diceNumber })