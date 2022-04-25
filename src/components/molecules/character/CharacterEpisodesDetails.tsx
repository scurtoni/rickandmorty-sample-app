import React, { FC } from "react";
import TextItem from "./../../atoms/TextItem";
import Typography from "@mui/material/Typography";

type Props = {
  episodes?: any[];
};

const CharacterEpisodesDetails: FC<Props> = (props) => {
  const { episodes } = props;

  return (
    <>
      <Typography gutterBottom variant="h6" component="div">
        Episodes
      </Typography>
      {episodes.map((episode) => (
        <TextItem variant="body2" color="text.secondary" key={episode.id} label="episode name:" text={`${episode.name} (${episode.episode} ${episode.air_date} )`} />
      ))}
    </>
  );
};

export default CharacterEpisodesDetails;
