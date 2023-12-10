import React from "react";
import { render } from "utils/TestWrapper";
import '@testing-library/jest-dom';
import { CustomerBar } from "components";
import { faker } from "@faker-js/faker";

describe("test the customer bar component", () => {
    
    const customerBar_Props = {
        id: faker.number.int({min: 1, max: 50}),
        email: faker.internet.email(),
        client: faker.person.fullName(),
        creationDate: "2022-07-31T01:33:29.567Z"
    }
    it("renders as expected", () => {
        const { getByTestId } = render(<CustomerBar {...customerBar_Props}/>)

        expect(getByTestId("customer-bar-container")).toBeInTheDocument()
        expect(getByTestId("customer-bar-desktop")).toBeInTheDocument()
        expect(getByTestId("customer-bar-mobile")).toBeInTheDocument()
        expect(getByTestId("customer-information")).toBeInTheDocument()
        expect(getByTestId("customer-email")).toBeInTheDocument()
        expect(getByTestId("customer-name")).toBeInTheDocument()

    })
})
