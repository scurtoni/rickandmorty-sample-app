import React, { FC } from "react";
import Typography from "@mui/material/Typography";

type Props = {
  location?: any;
};

const CharacterLocationDetails: FC<Props> = (props) => {
  const { location } = props;

  return (
    <>
      <Typography variant="body2" color="text.secondary">
        location name: {location?.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        location type: {location?.type}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        location dimension: {location?.dimension}
      </Typography>
    </>
  );
};

export default CharacterLocationDetails;
