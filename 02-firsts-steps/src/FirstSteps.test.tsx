import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi, afterEach } from 'vitest';
import { FirstStepsApp } from './FirstsStepsApp';

const mockItemCounter = vi.fn((_props: unknown) => {
  /* Extrayendo el componente ItemCounter dentro de una fn para saber cuantas veces fue llamado */
  return <div data-testid="ItemCounter" />;
}); //.fn() es una funcion que cuando se manda a llamar nos dice con que argumentos fue llamada y simular peticiones HTTP

vi.mock('./shopping-cart/ItemCounter.tsx', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock('./shopping-cart/ItemCounter.tsx', () => ({
//   ItemCounter: (props: unknown) => (
// <div
//   data-testid="ItemCounter"
//   name={props.name}
//   quantity={props.quantity}
// />
//   ),
// })); // Creando la simulación de un componente

describe('FirstSteps', () => {
  afterEach(() => {
    vi.clearAllMocks(); // Limpiando las pruebas para que no sean dependientes unas de otras
  });

  test('should match snpashot', () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId('ItemCounter');
    expect(itemCounters.length).toBe(3);
  });

  test('should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      // Testeando con que argumentos se llamó al componente
      name: 'Nintendo Switch 2',
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Pro Controller',
      quantity: 3,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Super Smash',
      quantity: 5,
    });
  });
});
