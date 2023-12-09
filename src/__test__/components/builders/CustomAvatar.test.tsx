import React from "react";
import { render, act } from "utils/TestWrapper";
import '@testing-library/jest-dom';
import { CustomAvatar } from "components";
import userEvent from "@testing-library/user-event";


describe("The Custom Avatar component", () => {
    it("renders the component", () => {
       const { getByTestId } = render(<CustomAvatar />)
       expect(getByTestId("avatar-container")).toBeInTheDocument()
       expect(getByTestId("avatar-icon-button")).toBeInTheDocument()
       expect(getByTestId("avatar-component")).toBeInTheDocument()
    })

    it("functions as expected", () => {
        const { getByTestId, getByText, getAllByRole } = render(<CustomAvatar />)
        const avatar = getByTestId("avatar-component")

        act(() => {
            userEvent.click(avatar)
        })
        
        expect(getByTestId("avatar-dropdown-menu")).toBeInTheDocument()
        expect(getAllByRole("menuitem")).toHaveLength(3)
        expect(getByText("Profile")).toBeInTheDocument()
        expect(getByText("Notifications")).toBeInTheDocument()
        expect(getByText("Logout")).toBeInTheDocument()

    })
})