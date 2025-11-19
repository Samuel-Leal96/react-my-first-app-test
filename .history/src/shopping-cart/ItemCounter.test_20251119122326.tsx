import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {

    test('should render with default values', () => {

        render(<ItemCounter name="Test item" />)

        expect(screen.getByText('Test item')).toBeDefined();
        expect(screen.getByText('Test item')).not.toBeNull();

    })

})