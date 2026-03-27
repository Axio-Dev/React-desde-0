import { heroes, type Hero } from "../data/heroes.data" // Hay que poner "type" cuando se importen interfaces o tipos




const getHeroById = (id: number): Hero|undefined => {
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    })

    // if ( !hero ) {
    //     throw Error(`No existe un hero con el id ${ id }`);
    // } Así podemos quitar el undefined para que este manejado el error

    return hero;
}

console.log(getHeroById(9))