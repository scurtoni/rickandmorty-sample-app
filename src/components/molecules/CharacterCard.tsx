import React, { FC } from "react";
import models from "./../../models";

type Props = {
  character: models.Character;
};

const CharacterCard: FC<Props> = (props) => {
  return <div>{props.character.name}</div>;
};

export default CharacterCard;
