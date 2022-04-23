import React, { FC } from "react";
import models from "./../../models";
import { useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { DetailsActionTypes } from "./../../state/common.types";
import CharacterLocationDetails from "./CharacterLocationDetails";
import CharacterEpisodesDetails from "./CharacterEpisodesDetails";

type Props = {
  character: models.Character;
  details?: any;
};

const CharacterCard: FC<Props> = (props) => {
  const { character, details } = props;
  const dispatch = useDispatch();

  const getDetails = () => {
    dispatch({
      type: DetailsActionTypes.GET_CHARACTER_DETAILS,
      payload: { character }
    });
  };

  return (
    <Card>
      <CardMedia component="img" image={character.image} alt="green iguana" />
      <CardContent>
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

        {details?.location && character.id === details.id ? (
          <CharacterLocationDetails location={details?.location} />
        ) : (
          <Typography variant="body2" color="text.secondary">
            location: {character.location.name}
          </Typography>
        )}
        {details?.episodes && character.id === details.id && <CharacterEpisodesDetails episodes={details?.episodes} />}

        <Button
          size="small"
          onClick={() => {
            getDetails();
          }}
        >
          DETAILS
        </Button>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
