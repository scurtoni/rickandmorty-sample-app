import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchActionTypes } from "./../../state/common.types";
import { ApplicationState, Character } from "./../../models";

import CharacterCard from "./../molecules/CharacterCard";

type Props = {};

const CharacterList: FC<Props> = () => {
  const dispatch = useDispatch();

  const { results, info, page } = useSelector((state: ApplicationState) => state.characterSearch);

  useEffect(() => {
    dispatch({
      type: SearchActionTypes.SEARCH_CHARACTERS,
      payload: {
        page: 2
      }
    });
  }, []);

  return (
    <div>
      {results.map((character: Character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
