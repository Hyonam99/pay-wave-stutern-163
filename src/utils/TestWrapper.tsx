import React from 'react';
import { render as rtlRender } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from '@/core/state/store'
// import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { MemoryRouter } from "react-router-dom"


const render = (
  ui:any, {
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children } : any) => (
        <MemoryRouter>{children}</MemoryRouter>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions});
};


export *  from '@testing-library/react';
export { render };
