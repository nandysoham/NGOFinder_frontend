import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default (props) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={props.Togglemode}
      checked={props.dark}
      size={80}
    />
  );
};


    // onChange={setIsDarkMode}
    // checked={isDarkMode}