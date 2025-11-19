import { useState } from "react";

interface ItemCounterProps {
    name: string;
    quantity?: number
}

export const ItemCounter = ({ name, quantity }: ItemCounterProps) => {

    const [count, setCount] = useState(10)

    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleSubtract = () => {
        setCount(count - 1)
    }

    return (
        <section style={{
            display: "flex",
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
        }}>

            <span
                style={{
                    width: 150
                }}
            >
                {name}
            </span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubtract}>-1</button>
        </section>
    )
}
