import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useGifs } from "./useGifs";

describe("useGifs", () => {
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());
    const gifName = "dragon ball z";

    await act(async () => {
      // para esperar una tarea asíncrona hay que hacer un await en el act
      // para que este espere al await dentro del act
      await result.current.handleSearch(gifName);
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs when handleTermClicked is called", async () => {
    const { result } = renderHook(() => useGifs());
    const previousTerm = "saitama";

    await act(async () => {
      await result.current.handleTermClicked(previousTerm);
    });

    expect(result.current.gifs.length).toBe(10);
  });
});
