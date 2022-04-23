import React, { FC } from "react";

import Typography from "@mui/material/Typography";

type Props = {
  episodes?: any[];
};

const CharacterEpisodesDetails: FC<Props> = (props) => {
  const { episodes } = props;

  return (
    <>
      {episodes.map((episode) => (
        <Typography variant="body2" color="text.secondary">
          episode name: {episode.name} {episode.air_date} {episode.name}
        </Typography>
      ))}
    </>
  );
};

export default CharacterEpisodesDetails;
