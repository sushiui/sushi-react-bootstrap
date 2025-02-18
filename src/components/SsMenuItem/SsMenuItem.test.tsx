import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from 'vitest';
import SsMenuItem from "./SsMenuItem";
import '@testing-library/jest-dom';

describe("SsMenuItem Component", () => {

    const defaultProps = {
        testid: "menu-item",
        children: <span>Menu Item</span>,
        className: "menu-item-class",
        active: false,
        path: "/test-path",
        onClick: vi.fn(),
        onNavigate: vi.fn(),
    };

    test("renders the component with children and correct class names", () => {
        render(<SsMenuItem {...defaultProps} />);

        const menuItem = screen.getByTestId("menu-item");

        expect(menuItem).toHaveClass("menu-item-class");
    });
});
