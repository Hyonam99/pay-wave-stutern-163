import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

/******************************************************************************************************
 * Create a custom render to handle the error from react router dom:
 * react router dom throws an error when components that uses its elements renders
 * outside the "Routes" or "Route" component from the root directory.
 * This render wrapper wraps all rendered children in a jest test with a "MemmoryRouter" to resolve this
 *********************************************************************************************************/

const render = (ui: any, { ...renderOptions } = {}) => {
	const Wrapper = ({ children }: any) => (
		<MemoryRouter>{children}</MemoryRouter>
	);

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

//Exports other members from the testing library to prevent multiple imports in test files
export * from "@testing-library/react";
export { render };
