import React, { ReactNode, FC } from 'react';

interface SimpleHOCProps {
  children: ReactNode;
}

function simpleHOC<P>(WrappedComponent: FC<P>): FC<SimpleHOCProps & P> {
  const SimpleHOC: FC<SimpleHOCProps & P> = (props) => {
    // You can perform any logic here before or after rendering the wrapped component
    return <WrappedComponent {...props} />;
  };

  return SimpleHOC;
}

// Example usage of the HOC
interface MyComponentProps {
  someProp: string;
}

const MyComponent: FC<MyComponentProps> = ({ someProp }) => (
  <div>
    <p>{someProp}</p>
  </div>
);

// Apply the HOC to MyComponent
const MyComponentWithHOC = simpleHOC(MyComponent);

// Render the wrapped component
const App: FC = () => (
  <MyComponentWithHOC someProp="Hello, world!">
    {/* Any children you want to pass to MyComponent */}
  </MyComponentWithHOC>
);

export default App;
