import { useContext } from "react";
import { Typography, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../theme/ThemeContext";
import { headerContainer, logo, nav, navLink } from "./styles";

const Header = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={headerContainer}>
      <Typography variant="h5" style={logo}>
        Barbería Luis Camacho
      </Typography>

      <nav style={nav}>
        <a href="#inicio" style={navLink}>Inicio</a>
        <a href="#servicios" style={navLink}>Servicios</a>
        <a href="#galeria" style={navLink}>Galería</a>
        <a href="#contacto" style={navLink}>Contacto</a>

        <IconButton
          onClick={toggleTheme}
          size="small"
          color="primary"
        >
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </nav>
    </header>
  );
};

export default Header;
