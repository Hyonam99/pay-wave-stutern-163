import React from 'react';
import { render, screen } from '@testing-library/react';
import { SideNav } from '../../components/index';

describe("App component", () => {
    it("renders the Landing Page", () => {
      render(<SideNav />);
  
      const linkElement = screen.getByText(/SideNav/i);
      expect(linkElement).toBeInTheDocument();
    })
})