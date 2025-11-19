import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {

    test('should render with default values', () => {

        render(<ItemCounter name="Test item" />)

        screen.debug();

        // expect( screen. )

    })

})