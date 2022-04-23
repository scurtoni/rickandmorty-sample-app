import React, { FC } from "react";
import models from "../../models";
import Typography from "@mui/material/Typography";

type Props = {
  character: models.Character;
};

const CharacterCard: FC<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {character.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        status: {character.status}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        species: {character.species}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        type: {character.type}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        gender: {character.gender}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        gender: {character.gender}
      </Typography>
    </>
  );
};

export default CharacterCard;
