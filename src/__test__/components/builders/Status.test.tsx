import React from "react";
import { render } from "utils/TestWrapper";
import '@testing-library/jest-dom';
import { Status } from "components";

describe("test the customer bar component", () => {
    
    it("renders the status component with for paid invoices", () => {
        const { getByTestId } = render(<Status status="paid"/>)
        expect(getByTestId("paid-status-component")).toBeInTheDocument()
        expect(getByTestId("paid-status-component")).toHaveTextContent("Paid")
    })

    it("renders the status component with for pending invoices", () => {
        const { getByTestId } = render(<Status status="pending"/>)
        expect(getByTestId("pending-status-component")).toBeInTheDocument()
        expect(getByTestId("pending-status-component")).toHaveTextContent("Pending")
    })

    it("renders the status component with for draft invoices", () => {
        const { getByTestId } = render(<Status status="draft"/>)
        expect(getByTestId("draft-status-component")).toBeInTheDocument()
        expect(getByTestId("draft-status-component")).toHaveTextContent("Draft")
    })
})