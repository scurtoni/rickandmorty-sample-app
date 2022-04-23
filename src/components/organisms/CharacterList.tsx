import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchActionTypes } from "./../../state/common.types";
import { ApplicationState, Character } from "./../../models";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import CharacterCard from "./../molecules/CharacterCard";

type Props = {};

const CharacterList: FC<Props> = () => {
  const dispatch = useDispatch();

  const { results, info, page, details } = useSelector((state: ApplicationState) => state.characterSearch);

  useEffect(() => {
    dispatch({
      type: SearchActionTypes.SEARCH_CHARACTERS,
      payload: {
        page: 2
      }
    });
  }, []);

  return (
    <Grid container spacing={2}>
      {results.map((character: Character) => (
        <Grid item xs={12} md={6} lg={4} key={character.id}>
          <CharacterCard character={character} details={details} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
