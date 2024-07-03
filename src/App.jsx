import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';

const App = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
};

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <RoutesApp />
    </div>
  );
};

export default App;
