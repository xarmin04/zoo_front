// ThemeButton.js
import React from 'react';
import { useTheme } from "../Context/Themecontext";
import "./ThemeToggleButton.css";



const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();


  return <button className="ThemeButton" onClick={toggleTheme} >toggleTheme</button>;
};

export default ThemeToggleButton;
