import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FirstStepsApp } from "./FirstsStepsApp";



describe('FirstSteps', () => {

    test('should match snpashot', () => {

        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    })
})