import React from "react";
import { fireEvent, render, act, waitFor } from "utils/TestWrapper";
import "@testing-library/jest-dom";
import { Login } from "pages";

describe("Test the Login page behaviours", () => {
	it("renders the login page and functions properly", async () => {
		const {
			getByTestId,
			getByText,
			getByPlaceholderText,
			getByTitle,
			getByRole,
		} = render(<Login />);

		const emailInput = getByPlaceholderText("enter your email");
		const passwordInput = getByPlaceholderText("enter your password");
		const toggle_Password_button = getByTestId("toggle-password-btn");
		const forgot_Password_Link = getByRole("link", {
			name: "Forgot Password ?",
		});
		const create_Account_Link = getByRole("link", { name: "Create one" });
		const loginButton = getByRole("button", { name: "Log in" });

		expect(getByTestId("login-page-container")).toBeInTheDocument();
		expect(getByText("Login")).toBeInTheDocument();
		expect(getByText("Don't have an account ?")).toBeInTheDocument();
		expect(getByTestId("login-page-form")).toBeInTheDocument();
		expect(getByTestId("login-form-wrapper")).toBeInTheDocument();
		expect(getByTitle("check-box")).toBeInTheDocument();
		expect(getByTitle("toggle-open")).toBeInTheDocument();
		expect(getByText("Remember me")).toBeInTheDocument();
		expect(forgot_Password_Link).toBeInTheDocument();
		expect(create_Account_Link).toBeInTheDocument();
		expect(create_Account_Link).toHaveAttribute("href", "/register");

		act(() => {
			fireEvent.click(loginButton);
		});

		await waitFor(() =>
			expect(getByText("email is required")).toBeInTheDocument()
		);
		expect(getByText("password is required")).toBeInTheDocument();
		expect(passwordInput).toHaveAttribute("type", "password");

		act(() => {
			fireEvent.change(emailInput, { target: { value: "someone@email.com" } });
			fireEvent.change(passwordInput, {
				target: { value: "somePassword!123" },
			});
		});

		act(() => {
			fireEvent.click(toggle_Password_button);
		});

		expect(passwordInput).toHaveAttribute("type", "text");
	});
});
