import React from "react";
import { render, screen } from "utils/TestWrapper";
import { LandingPage } from "pages";

describe("App component", () => {
	it("renders the Landing Page", () => {
		render(<LandingPage />);

		expect(screen.getByText("Pay wave")).toBeInTheDocument()
		expect(screen.getByTestId("hero-container")).toBeInTheDocument()
		expect(screen.getByTestId("hero-description")).toBeInTheDocument()
	});
});
