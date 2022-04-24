import React, { FC } from "react";
import models from "./../../models";
import { useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TextItem from "./../atoms/TextItem";
import { DetailsActionTypes } from "./../../state/common.types";
import CharacterLocationDetails from "./CharacterLocationDetails";
import CharacterEpisodesDetails from "./CharacterEpisodesDetails";
import CharacterInfo from "./CharacterInfo";

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
        <CharacterInfo character={character} />

        {details?.location && character.id === details.id ? (
          <CharacterLocationDetails location={details?.location} />
        ) : (
          <TextItem variant="body2" color="text.secondary" label="location" text={character.location.name} />
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
