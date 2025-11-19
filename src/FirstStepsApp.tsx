import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    id: number
    productName: string;
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    { id: 1, productName: 'Nintendo Switch 2', quantity: 1 },
    { id: 2, productName: 'Pro Controler', quantity: 3 },
    { id: 3, productName: 'Super Smash', quantity: 5 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
            <ItemCounter name="Pro Controler" quantity={3} />
            <ItemCounter name="Super Smash" quantity={2} /> */}

            {
                itemsInCart.map(({ id, productName, quantity }) => (
                    <ItemCounter key={id} name={productName} quantity={quantity} />
                ))
            }

        </>
    );
}
