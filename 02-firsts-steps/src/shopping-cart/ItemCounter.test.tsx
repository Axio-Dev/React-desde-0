import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {
  test('should render with default value', () => {
    const name = 'Test item';

    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test('should render with custom quantity', () => {
    const name = 'Control de nintendo';
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('should increase count when +1 button is pressed', () => {
    render(<ItemCounter name="Test item" quantity={1} />);

    const [buttonAdd] = screen.getAllByRole('button');

    fireEvent.click(buttonAdd);

    expect(screen.getByText('2')).toBeDefined();
  });

  test('should decress count when -1 button is pressed', () => {
    render(<ItemCounter name="Test item" quantity={5} />);

    const [, buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByText('4')).toBeDefined();
  });

  test('should not decress count when -1 button is pressed and quantity is 0', () => {
    const quantity = 0;
    render(<ItemCounter name="Test item" quantity={quantity} />);

    const [, buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByText('0')).toBeDefined();
  });

  test('should change to red when count is greater than 5', () => {
    const quantity = 5;
    const name = 'Test item';
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe('red');
  });

  test('should change to green when counter is greater than 5', () => {
    const quantity = 6;
    const name = 'Test item';
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe('green');
  });
});
