import React from "react";
import { render, waitFor, act } from "utils/TestWrapper";
import "@testing-library/jest-dom";
import { CustomFilter } from "components";
import userEvent from "@testing-library/user-event";

describe("test the customer filter component", () => {
	const customerFilter_Props = {
		setValueChange: jest.fn(),
		displayData: ["All", "Pending", "Draft", "Completed"],
	};
	it("renders and functions as expected", async () => {
		const { getByRole, getByLabelText, getByText, getAllByRole, getAllByText } =
			render(<CustomFilter {...customerFilter_Props} />);

		const filterInput = getByRole("combobox");

		expect(getByLabelText("Filter")).toBeInTheDocument();
		expect(getByText("filter-invoice")).toBeInTheDocument();
		expect(filterInput).toBeInTheDocument();
		expect(filterInput).toHaveAttribute("aria-expanded", "false");

		act(() => {
			userEvent.click(filterInput);
		});

		await waitFor(() =>
			expect(filterInput).toHaveAttribute("aria-expanded", "true")
		);

		expect(getByRole("listbox")).toBeVisible();
		expect(getAllByRole("option")).toHaveLength(4);
		expect(getAllByText("All")).toHaveLength(2);
		expect(getByText("Pending")).toBeInTheDocument();
		expect(getByText("Draft")).toBeInTheDocument();
		expect(getByText("Completed")).toBeInTheDocument();

		act(() => {
			userEvent.click(getByText("Draft"));
		});

		await waitFor(() =>
			expect(filterInput).toHaveAttribute("aria-expanded", "false")
		);
		expect(filterInput).toHaveTextContent("Draft");
	});
});
