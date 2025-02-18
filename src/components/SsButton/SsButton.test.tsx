import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from 'vitest';
import SsButton from "./SsButton";

describe("PrimaryButton", () => {
    test("renders the Rating component", () => {
        render(<SsButton role={'btn'} variant={'primary'}>BTN</SsButton>);

        const button = screen.getByRole("btn");
        expect(button.innerHTML).toEqual("BTN");
    });
});
