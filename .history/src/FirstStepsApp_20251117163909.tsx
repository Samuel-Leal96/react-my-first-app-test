import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>HoCarrito de compras</h1>

            <ItemCounter name="Nintendo Switch 2" quantity={1} />
            <ItemCounter name="Pro Controler" quantity={3} />
            <ItemCounter name="Super Smash" quantity={2} />

        </>
    );
}
