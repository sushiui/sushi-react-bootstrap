import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from 'vitest';
import SsButton from "./SsButton";

// describe("PrimaryButton", () => {
//     test("renders the Rating component", () => {
//         render(<SsButton role={'btn'} variant={'primary'}>BTN</SsButton>);

//         const button = screen.getByRole("btn");
//         expect(button.innerHTML).toEqual("BTN");
//     });
// });

describe("SsButton", () => {
    test("renders with correct text", () => {
        render(<SsButton role="btn" variant="primary">BTN</SsButton>);
        const button = screen.getByRole("btn");
        expect(button.textContent).toBe("BTN");
    });

    test("applies variant class correctly", () => {
        render(<SsButton variant="success">Success</SsButton>);
        const button = screen.getByText("Success");
        expect(button.classList.contains("btn-success")).toBe(true);
    });

    test("handles click events", () => {
        const handleClick = vi.fn();
        render(<SsButton onClick={handleClick}>Click Me</SsButton>);
        fireEvent.click(screen.getByText("Click Me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("applies custom className", () => {
        render(<SsButton className="custom-class">Custom</SsButton>);
        const button = screen.getByText("Custom");
        expect(button.classList.contains("custom-class")).toBe(true);
    });
});