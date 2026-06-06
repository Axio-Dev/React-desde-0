import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifAction from "../actions/get-gifs-by-query.action";

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

  test("should return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());
    const previousTerm = "shingeki no kyojin";

    await act(async () => {
      await result.current.handleTermClicked(previousTerm);
    });

    vi.spyOn(gifAction, "getGifsByQuery").mockRejectedValue(
      new Error("The term should be exist on the previous terms"),
    );

    expect(result.current.gifs.length).toBe(10);

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return no more than 8 previous terms", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifAction, "getGifsByQuery").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("AXEL");
    });
    await act(async () => {
      await result.current.handleSearch("AXEL2");
    });
    await act(async () => {
      await result.current.handleSearch("AXEL3");
    });
    await act(async () => {
      await result.current.handleSearch("AXEL4");
    });
    await act(async () => {
      await result.current.handleSearch("AXEL5");
    });
    await act(async () => {
      await result.current.handleSearch("AXEL6");
    });
    await act(async () => {
      await result.current.handleSearch("AXEL7");
    });
    await act(async () => {
      await result.current.handleSearch("AXEL8");
    });
    await act(async () => {
      await result.current.handleSearch("AXEL9");
    });

    console.log(result.current.previousTerms);

    expect(result.current.previousTerms.length).toBe(8);
    expect(result.current.previousTerms).toStrictEqual([
      "axel9",
      "axel8",
      "axel7",
      "axel6",
      "axel5",
      "axel4",
      "axel3",
      "axel2",
    ]);
  });
});
