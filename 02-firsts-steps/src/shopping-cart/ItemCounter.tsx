import { useState } from "react";

// import './ItemCounter.css' <== importando como hoja de estilos normal
import styles from './ItemCounter.module.css' // <== Importando como modulo de CSS

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 0 }: Props) => {

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if (count <= 0) return;
        setCount(count - 1)
    }

    return (
        <section className={styles.itemRow}>
            <span
                className={styles['item-text']}
                style={{
                    color: count <= 5 ? 'red' : 'green' // Este tipo de estilos que son dinámicos, se dejan dentro del componente
                }}
            >
                {name}
            </span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubtract}> -1 </button>
        </section >
    )
}