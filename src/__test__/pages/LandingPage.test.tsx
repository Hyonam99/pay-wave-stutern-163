import React from 'react';
import { render, screen } from '@testing-library/react';
import {LandingPage} from '../../pages';

describe("App component", () => {
    it("renders the Landing Page", () => {
      render(<LandingPage />);
  
      const linkElement = screen.getByText(/LandingPage/i);
      expect(linkElement).toBeInTheDocument();
    })
})
