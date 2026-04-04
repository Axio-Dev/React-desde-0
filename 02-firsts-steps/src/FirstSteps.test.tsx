import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstsStepsApp';

vi.mock('./shopping-cart/ItemCounter.tsx', () => ({
  ItemCounter: () => <div data-testid="ItemCounter" />,
})); // Creando la simulación de un componente

describe('FirstSteps', () => {
  test('should match snpashot', () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId('ItemCounter');
    expect(itemCounters.length).toBe(3);

    screen.debug();
  });
});
