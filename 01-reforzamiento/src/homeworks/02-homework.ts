/* 
* getHeroByOwner => Hero[]

* Filtra héroes por su propietario

* @param Owner - El propietario por el cual filtrar (DC o Marvel)

* @returns Array de héroes pertenecientes al propietario especificado

*/

import { heroes, Owner } from "../data/heroes.data";


export const getHeroByOwner = (ownerParam: Owner) => {
    const hero = heroes.filter((hero) => hero.owner === ownerParam)
    return hero;
}

// console.log(getHeroByOwner(Owner.DC))