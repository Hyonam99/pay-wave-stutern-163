import React from "react";
import { fireEvent, render, screen } from "utils/TestWrapper";
import '@testing-library/jest-dom';
import { CustomButton } from "components";
import { CustomButtonProps } from "interfaces/Interfaces";

describe("Test the Custom Buttom Component", () => {

    const button_Props: CustomButtonProps = {
        title: "Button Title",
        size: "small",
        outlined: false,
        onClick: jest.fn(),
        color: "primary",
        className: "button-className",
        type: "button",
        isLoading: false,
    }

    it("button renders and functions properly", () => {
        
        render(<CustomButton {...button_Props} />);

        const buttonElement = screen.getByRole("button", {name: "Button Title"});

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("button-className");
        
        fireEvent.click(buttonElement);
        expect(button_Props.onClick).toHaveBeenCalledTimes(1);
    })

    it("displays loading icon when isLoading state is true", () => {
        const { container } = render(<CustomButton {...button_Props} isLoading={true} />);

        const isLoading_Icon = container.querySelector("svg");
        expect(isLoading_Icon).toBeInTheDocument();
    });
})
