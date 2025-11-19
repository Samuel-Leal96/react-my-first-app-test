import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react"
import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {
    test('Should render firstName and lastName', () => {
        const { container } = render(<MyAwesomeApp />);

        screen.debug();
        // console.log(container)

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h1');

        expect(h1?.innerHTML).toContain('Samuel');
        expect(h3?.innerHTML).toContain('Leal');

    })
})