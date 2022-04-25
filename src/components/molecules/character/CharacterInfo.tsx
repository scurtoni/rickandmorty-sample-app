import React, { FC } from "react";
import models from "../../../models";
import Typography from "@mui/material/Typography";
import TextItem from "./../../atoms/TextItem";

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

      <TextItem variant="body2" color="text.secondary" label="status:" text={character.status} />
      <TextItem variant="body2" color="text.secondary" label="species:" text={character.species} />
      <TextItem variant="body2" color="text.secondary" label="type:" text={character.type} />
      <TextItem variant="body2" color="text.secondary" label="gender:" text={character.gender} />
      <TextItem variant="body2" color="text.secondary" label="status:" text={character.status} />
    </>
  );
};

export default CharacterCard;
