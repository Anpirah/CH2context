import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

const Button = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default Button;
