interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: '1234',
        city: 'New york'
    }
};

const spiderman: Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 0,
    address: {
        postalCode: 'AB123',
        city: 'New York'
    }
}

console.log(ironman, spiderman);

// const spiderman = { ...ironman }; //
/* Con los 3 puntos le estamos diciendo que esparza/asigne todos los valores de iron en spiderman, se le conoce como operador speard */

// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.city = 'San José'

// console.log(ironman, spiderman)