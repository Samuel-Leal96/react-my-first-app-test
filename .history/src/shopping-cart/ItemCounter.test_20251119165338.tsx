import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {

    test('should render with default values', () => {

        const name = 'Control nintendo';

        render(<ItemCounter name={name} />)

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();

    })

    test('should render with custom quantity', () => {

        const name = 'Control nintendo';

        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />)

        expect(screen.getByText(quantity)).toBeDefined();

    })

    test('should decrease count when -1 button is pressed', () => {
        render(<ItemCounter name="Test item" quantity={5} />);

        const [buttonAdd, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();

    })

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        render(<ItemCounter name="Test item" quantity={1} />);

        const [buttonAdd, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('1')).toBeDefined();

    })

})