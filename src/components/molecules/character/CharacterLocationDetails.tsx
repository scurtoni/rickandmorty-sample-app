import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import TextItem from "./../../atoms/TextItem";

type Props = {
  location?: any;
};

const CharacterLocationDetails: FC<Props> = (props) => {
  const { location } = props;

  return (
    <>
      <Typography gutterBottom variant="h6" component="div">
        Location
      </Typography>
      <TextItem variant="body2" color="text.secondary" label="name:" text={location.name} />
      <TextItem variant="body2" color="text.secondary" label="type:" text={location?.type} />
      <TextItem variant="body2" color="text.secondary" label="dimension:" text={location?.dimension} />
    </>
  );
};

export default CharacterLocationDetails;
