function greet ( name: string ): string { // Aquí estamos obligando a TS a que se retorne algo de tipo string
    return `Hola ${name}`
}

const greet2 = (name: string) => `Hola ${name}` // Así es como se hace una función de flecha simplificada

greet = function() { // Esto sí se puede en Js cuando es un función normal, pero en TS no se puede
    return 'Hola Pedro';
}

interface User{
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El_Papi21',
    }
}

// Tarea en vídeo: crear una función de flecha que regrese lo mismo que getUser()
const getUser2 = () => ({ // así es como se simplifica una funcion de flecha con un retorno más complejo. Los parentesis fungen como retono implícito
    uid: 'Uid-123',
    username: 'La_Mami21'
});

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);
const user = getUser();
const user2 = getUser2();
console.log(user, user2)

const myArray: number[] = [1,2,3,4,5];

// myArray.forEach(function(value){
//     console.log({ value })
// });
// Manera de hacer una funcion para recorrer e imprimir números, de manera tradicional. Esto se le conoce como una función callback

myArray.forEach( (value) => {
    console.log({ value })
});
// Manera de crear de recorrer un array con una función de flecha (Más simple)