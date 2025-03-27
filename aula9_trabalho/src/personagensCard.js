import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Avatar } from "@mui/material";

const CharacterCard = ({ character }) => {
  return (
    <Card style={{ maxWidth: 300, m: 2, backgroundColor: '#000000', borderRadius: 2, boxShadow: 3 }}>

      <CardMedia component="img" height="200" image={character.image} alt={character.name} />
      <CardContent>
        <Typography variant="h5" component="div" style={{ color: 'white' }}>
          {character.name}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <Avatar sx={{ bgcolor: character.status === "Alive" ? "green" : "red", width: 10, height: 10 }} />
          <Typography style={{ color: 'white' }}>
            {character.status} - {character.species}
          </Typography>
        </Box>
        <Typography variant="body2" style={{ color: "white" }}>
          <strong>Origem:</strong> {character.origin.name}
        </Typography>
        <Typography variant="body2" style={{ color: "white" }}>
          <strong>Localização:</strong> {character.location.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
