import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useHeroSummary } from "./useHeroSummary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const tanStackCustomProvider = () => {
  /**
   * Devuelve un wrapper para pruebas que envuelve los children con un
   * `QueryClientProvider` usando un `QueryClient` aislado por llamada.
   *
   * - Desactiva los reintentos (`retry: false`) para tests deterministas.
   * - Usar como `wrapper` en `renderHook` o `render` para proporcionar React Query.
   */
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useHeroSummary", () => {
  test("should return the initial state (isLoading)", () => {
    const { result } = renderHook(() => useHeroSummary(), {
      wrapper: tanStackCustomProvider(),
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    // estos dos ultimos, son lo mismo, solo es otra manera
    expect(result.current.data).toBe(undefined);
    expect(result.current.data).toBeUndefined();
  });
});
