import React from "react";
import { render } from "utils/TestWrapper";
import '@testing-library/jest-dom';
import { Register } from "pages";

describe("Test the Register page", () => {

    it("renders page", () => {
        
        render(<Register />);

    })

})