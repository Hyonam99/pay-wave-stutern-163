import React from "react";
import { render, act, fireEvent, waitFor } from "utils/TestWrapper";
import "@testing-library/jest-dom";
import { Register } from "pages";
import { faker } from "@faker-js/faker";

describe("Test the Register Business page behaviour", () => {
	it("renders page", () => {
		const { getByText, getByTestId, getByRole, getByTitle } = render(
			<Register />
		);

		const login_Link = getByRole("link", { name: "Log In" });

		expect(getByTestId("registration-page-container")).toBeInTheDocument();
		expect(getByText("Create Account")).toBeInTheDocument();
		expect(
			getByText(
				"All input values should be valid, not generic or sample values"
			)
		).toBeInTheDocument();
		expect(getByTestId("registration-page-form")).toBeInTheDocument();
		expect(getByTestId("registration-form-wrapper")).toBeInTheDocument();
		expect(getByTitle("toggle-open")).toBeInTheDocument();
		expect(getByText("Already have an account ?")).toBeInTheDocument();
		expect(login_Link).toBeInTheDocument();
		expect(login_Link).toHaveAttribute("href", "/login");
	});

	it("functions as expected", async () => {
		const {
			getByText,
			getByTestId,
			getByPlaceholderText,
			getByRole,
			getByTitle,
		} = render(<Register />);

		const first_Name_Input = getByPlaceholderText("enter first name");
		const last_Name_Input = getByPlaceholderText("enter last name");
		const email_Input = getByPlaceholderText("enter email address");
		const business_Name_Input = getByPlaceholderText("enter business name");
		const phone_Number_Input = getByPlaceholderText("enter phone number");
		const password_Input = getByPlaceholderText("enter unique password");
		const toggle_Password_button = getByTestId("toggle-password-btn");
		const registerButton = getByRole("button", { name: "Create" });

		expect(first_Name_Input).toBeInTheDocument();
		expect(last_Name_Input).toBeInTheDocument();
		expect(email_Input).toBeInTheDocument();
		expect(business_Name_Input).toBeInTheDocument();
		expect(phone_Number_Input).toBeInTheDocument();
		expect(password_Input).toBeInTheDocument();

		act(() => {
			fireEvent.click(registerButton);
		});

		await waitFor(() =>
			expect(getByText("first name is required")).toBeInTheDocument()
		);
		expect(getByText("last name is required")).toBeInTheDocument();
		expect(getByText("email is required")).toBeInTheDocument();
		expect(getByText("business name is required")).toBeInTheDocument();
		expect(getByText("phone number is required")).toBeInTheDocument();
		expect(getByText("password is required")).toBeInTheDocument();
		expect(password_Input).toHaveAttribute("type", "password");

		act(() => {
			fireEvent.change(first_Name_Input, {
				target: { value: faker.person.firstName() },
			});
			fireEvent.change(last_Name_Input, {
				target: { value: faker.person.lastName() },
			});
			fireEvent.change(email_Input, {
				target: { value: faker.internet.email() },
			});
			fireEvent.change(business_Name_Input, {
				target: { value: faker.company.name() },
			});
			fireEvent.change(phone_Number_Input, {
				target: { value: faker.phone.number() },
			});
			fireEvent.change(password_Input, {
				target: { value: faker.internet.password() },
			});
		});

		act(() => {
			fireEvent.click(toggle_Password_button);
		});

		expect(password_Input).toHaveAttribute("type", "text");
		expect(getByTitle("toggle-closed")).toBeInTheDocument();
	});
});
