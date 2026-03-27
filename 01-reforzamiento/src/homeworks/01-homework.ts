/* 
Crea una función llamada 'useState'. Debe cumplir con los siguientes requisitos:

La función debe llamarse useState.
Debe retornar un arreglo con dos elementos:

#1 - Un string (el valor inicial).

#2 - Una función anónima de flecha que:

Recibe un string.
Imprime ese string en consola. 
*/

const useState = (value: string) => {
    return [value, (newValue: string) => {
        console.log(newValue);
    }] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');