import React from "react";
import { render, screen } from "@testing-library/react";
import { LandingPage } from "../../pages/index";

describe("App component", () => {
	it("renders the Landing Page", () => {
		render(<LandingPage />);

		expect(screen.getByText("Pay wave")).toBeInTheDocument()
		expect(screen.getByTestId("hero-container")).toBeInTheDocument()
		expect(screen.getByTestId("hero-description")).toBeInTheDocument()
	});
});
