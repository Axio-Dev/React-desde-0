import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 3 },
    { productName: 'Super Smash', quantity: 5 }
];

export function FirstStepsApp() {
    return (
        <>

            {itemsInCart.map(({ productName, quantity }) => (
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))}
            {/* <h1>Carrito de compras</h1>
            <ItemCounter name="Nintendo Switch 2" quantity={3} />
            <ItemCounter name="Pro Controller" quantity={2} />
            <ItemCounter name="Super Smash" quantity={1} />
            <ItemCounter name="Super Mario" quantity={1} /> */}
        </>
    )
}