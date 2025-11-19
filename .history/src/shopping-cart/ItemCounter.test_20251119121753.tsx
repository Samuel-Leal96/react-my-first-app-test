import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {

    test('should render with default values', () => {

        render(<ItemCounter name="Test item" />)


    })

})