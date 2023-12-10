import React from "react";
import { render } from "utils/TestWrapper";
import '@testing-library/jest-dom';
import { InvoiceBar } from "components";
import { faker } from "@faker-js/faker";

describe("test the invoice bar component", () => {
    
    const invoiceBar_Props = {
        id: faker.number.int({min: 1, max: 50}),
        totalAmount: `${faker.number.int({min: 100, max: 50000})}`,
        paymentStatus: "paid",
        createdAt: "2022-07-31T01:33:29.567Z",
        paymentDueDate: "2022-09-31T01:33:29.567Z",
    }
    it("renders as expected", () => {
        const { getByTestId } = render(<InvoiceBar {...invoiceBar_Props}/>)

        expect(getByTestId("invoice-bar-container")).toBeInTheDocument()
        expect(getByTestId("invoice-bar-desktop")).toBeInTheDocument()
        expect(getByTestId("invoice-bar-mobile")).toBeInTheDocument()
        expect(getByTestId("invoice-information")).toBeInTheDocument()
        expect(getByTestId("invoice-date")).toBeInTheDocument()
        expect(getByTestId("invoice-amount")).toBeInTheDocument()

    })
})