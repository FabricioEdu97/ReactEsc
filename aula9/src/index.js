import React from "react";
import ReactDOM from "react-dom/client";
import ListaPersonagem from "./listaPersonagem"; 
import { CssBaseline, Container } from "@mui/material";
import "./styles.css";


const App = () => {
  return (
    <Container>
      <CssBaseline />
      <h1 style={{ textAlign: "center" }}>Rick and Morty Characters</h1>
      <ListaPersonagem /> 
    </Container>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
