import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchActionTypes } from "../../../state/common.types";
import { ApplicationState, Character } from "../../../models";

import Grid from "@mui/material/Grid";

import CharacterCard from "../../molecules/character/CharacterCard";

type Props = {};

const CharacterList: FC = () => {
  const dispatch = useDispatch();

  const { results, info, page, details, loadingId } = useSelector((state: ApplicationState) => state.characterSearch);

  useEffect(() => {
    dispatch({
      type: SearchActionTypes.SEARCH_CHARACTERS,
      payload: {
        page: 1
      }
    });
  }, []);

  return (
    <Grid container spacing={2} id="character-list">
      {results.map((character: Character) => (
        <Grid item xs={12} md={6} lg={4} key={character.id}>
          <CharacterCard character={character} details={details} loadingId={loadingId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
