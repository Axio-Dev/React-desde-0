function greet ( name: string ): string { // Aquí estamos obligando a TS a que se retorne algo de tipo string
    return `Hola ${name}`
}

const greet2 = (name: string) => {
    return `Hola ${name}`
}

greet = function() { // Esto sí se puede en Js cuando es un función normal, pero en TS no se puede
    return 'Hola Pedro';
}

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'El_Papi21'
    }
}

// Tarea en vídeo
const getUser2 = () => {
    return {
        uid: 'Uid-123',
        username: 'La_Mami21'
    }
}

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);
const user = getUser();
const user2 = getUser2();
console.log(user, user2)