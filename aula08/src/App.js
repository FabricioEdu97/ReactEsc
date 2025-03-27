import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuPrincipal from "MenuPrincipal";



const tema = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#ff5252',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={tema}>
      <CssBaseline /> { }
      
    </ThemeProvider>
  );
};

export default App;
