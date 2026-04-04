import type { CSSProperties } from "react";

/* Es mejor tener las variables (que no vayan a cambiar) fuera del componente */
const firstName = 'Axel';
const lastName = 'Vazquez';

const favoriteGames = ['Gears of War', 'GTA IV', 'Minecraft'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'México'
}

const myStyles: CSSProperties = {
    backgroundColor: '#901e1e',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
}

export function MyAwesomeApp() {
    // Componente para imprimir variables
    return (
        <div data-testid="mi-div">
            <h1 data-testid="first-name-label"> {firstName} </h1>
            <h3> {lastName} </h3>
            <p className="mi-clase-favorita">{favoriteGames.join(', ')}</p>
            <p>{2 + 4}</p>
            <h1>{isActive ? 'Activo' : 'No activo'}</h1>
            <p
            /* Agregando estilos CSS*/ style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    );
};
