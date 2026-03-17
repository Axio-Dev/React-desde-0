const firstName = 'Axel';
const lastName = "Va'zquez \"Es el apellido de alguien\""; /* Creando caracteres especiales. Una buena práctica es usar los strings con comillas dobles */
const lastName2 = 'Vazquez'

const fullName = `
El nombre es:
    ${firstName} ${lastName2}
`

console.log(lastName + ' ' + firstName + ':')
console.log(fullName);
