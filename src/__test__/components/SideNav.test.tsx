import React from 'react';
import { render, screen } from "utils/TestWrapper";
import '@testing-library/jest-dom';
import { SideNav } from 'components';

describe("App component", () => {
    it("renders the Landing Page", () => {
      render(<SideNav />);
  
      expect(screen.getByText("Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Invoices")).toBeInTheDocument();
    })
})