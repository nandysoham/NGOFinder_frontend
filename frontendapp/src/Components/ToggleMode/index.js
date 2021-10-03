
import DarkModeToggle from "react-dark-mode-toggle";

export default function Togglemode(props){
  // const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={props.Togglemode}
      checked={props.dark}
      size={80}
    />
  );
};

