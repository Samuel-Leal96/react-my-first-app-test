import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>HoCarrito de compras</h1>

            <ItemCounter name="Nintendo Switch 2" />
            <ItemCounter name="Pro Controler" />
            <ItemCounter name="Super Smash" />

        </>
    );
}
