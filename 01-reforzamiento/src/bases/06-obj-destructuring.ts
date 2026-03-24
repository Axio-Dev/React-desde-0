
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

const { name: ironmanName, age, key } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log(ironmanName, age, key)

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const userContext = ({ key, name, age, rank = 'Sin rango' /*<== Valor por defecto */  }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank: rank
    }
}

// Tarea en vídeo, desestructurar objetos
const {
    rank, 
    keyName, 
    user
} = userContext(person);

const { name } = user; // Desestructurando el name que viene de person

console.log({rank, keyName, name}); // Desestructurando propiedades de userContext (que incluyen valores de person y un valor por defecto)


