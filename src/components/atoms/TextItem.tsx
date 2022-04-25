import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";

type Props = {
  variant?: Variant;
  color?: string;
  label?: string;
  text: string;
};

const Card: FC<Props> = (props) => {
  return (
    <Typography variant={props.variant} color={props.text}>
      <span style={{ fontWeight: "bold" }}>{props.label}</span>: {props.text}
    </Typography>
  );
};

export default Card;
