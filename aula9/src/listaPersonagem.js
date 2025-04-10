import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import CharacterCard from "./personagensCard";

const ListaPersonagem = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error("Erro ao buscar personagens:", error));
  }, []);

  return (
    
    <Grid container spacing={3} justifyContent="center">
      {characters.map((character) => (
        <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
          <CharacterCard character={character} />
           
        </Grid>
      ))}
    </Grid>
  );
};

export default ListaPersonagem;
