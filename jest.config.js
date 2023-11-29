/* eslint-disable no-undef */

module.exports = {
	// Automatically clear mock calls, instances, contexts and results before every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: false,

	// The directory where Jest should output its coverage files
	coverageDirectory: "coverage",

	preset: "ts-jest/presets/js-with-ts",

	// An array of file extensions your modules use
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

	/***************************************************************************************************
	 * moduleNameMapper: A map from regular expressions to module names or to arrays of module names
	 * that allow to stub out resources with a single module.
	 * simulate a mock file "emptyMock.js" to redirect jest from testing stylesheets
	 ****************************************************************************************************/
	moduleNameMapper: {
		"\\.(css|scss)$": "<rootDir>/emptyMock.js", //
	},

	// A list of paths to modules that run some code to configure or set up the testing framework before each test
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

	// The test environment that will be used for testing
	testEnvironment: "jest-environment-jsdom",

	// A map from regular expressions to paths to transformers
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
		"^.+\\.svg$": "<rootDir>/svgTransform.js",
	},

	/******************************************************************************************************
	 * modulePaths: specifies the absolute paths to additional locations to search when resolving modules
	 * uses the <rootDir> string token to include the path to this project's root directory
	 *****************************************************************************************************/
	modulePaths: ["<rootDir>/src/"],

	//specify the folders where the code coverage should be collated from
	collectCoverageFrom: [
		// "src/**/*.ts", // will open this up to test for hooks when needed
		"src/**/*.tsx",
	],
};
