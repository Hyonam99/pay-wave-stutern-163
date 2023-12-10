import React from "react";
import { render } from "utils/TestWrapper";
import '@testing-library/jest-dom';
import { DashboardCard } from "components";
import { faker } from "@faker-js/faker";

describe("test the dashboard card component", () => {

    const dashboard_Card_Props = {
        title: faker.string.alpha(7),
        sub_Text: faker.string.alpha(11),
        content: `${faker.number.int()}`,
        icon: faker.internet.avatar()
    }
    it("renders as expected", () => {
        const { getByTestId } = render(<DashboardCard {...dashboard_Card_Props}/>)

        expect(getByTestId("main-card")).toBeInTheDocument()
        expect(getByTestId("card-text-box")).toBeInTheDocument()
        expect(getByTestId("card-title")).toBeInTheDocument()
        expect(getByTestId("card-text-content")).toBeInTheDocument()
        expect(getByTestId("card-subtext")).toBeInTheDocument()
        expect(getByTestId("card-icon")).toBeInTheDocument()

        expect(getByTestId("card-title")).toHaveTextContent(dashboard_Card_Props.title)
        expect(getByTestId("card-text-content")).toHaveTextContent(dashboard_Card_Props.content)
        expect(getByTestId("card-subtext")).toHaveTextContent(dashboard_Card_Props.sub_Text)
        expect(getByTestId("card-icon")).toHaveTextContent(dashboard_Card_Props.icon)

    })
})