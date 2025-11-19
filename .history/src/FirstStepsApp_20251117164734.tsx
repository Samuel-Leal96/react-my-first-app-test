import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controler', quantity: 3 },
    { productName: 'Super Smash', quantity: 5 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
            <ItemCounter name="Pro Controler" quantity={3} />
            <ItemCounter name="Super Smash" quantity={2} /> */}

            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter name={productName} quantity={quantity} />
                ))
            }

        </>
    );
}
