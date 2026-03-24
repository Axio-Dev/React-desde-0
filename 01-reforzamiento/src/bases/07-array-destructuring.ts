const charachterNames: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3] = charachterNames; // Para desestrucurar arreglos usamos const [propiedad] = obj;
// Cuando es un arreglo, la posición en la que se desesctructura es importante (p1=>index[0] en characterNames)

console.log({ p1, p2, p3 });
 
const [ , , trunks] = charachterNames;
// Así es como podemos desestructurar una posición especifica en arrays (usando comas, hasta llegar a la posición deseada)

console.log({ trunks });

const returnsArrayFn = () => {
    return ['ABC', 123] as const; // <== así le decimos a TS que mi func, siempre devolverá string y números
};

const [ letters, numbers ] = returnsArrayFn();

console.log(letters + 100);