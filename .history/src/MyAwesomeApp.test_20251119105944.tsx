import { describe, test } from "vitest";
import { render } from "@testing-library/react"
import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {
    test('Should render firstName and lastName', () => {
        const algo = render(<MyAwesomeApp />);
    })
})