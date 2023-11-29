import React from "react";
import { render } from "utils/TestWrapper";
import '@testing-library/jest-dom';
import { Login } from "pages";

describe("Test the Login page", () => {

    it("renders page", () => {
        
        render(<Login />);

    })

})
