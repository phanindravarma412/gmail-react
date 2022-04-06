import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import { faPen } from "@fortawesome/free-solid-svg-icons";
import classes from "./ComposeButton.module.css";

const ComposeButton = () => {
  return (
    <div className={classes.compose}>
      <FontAwesomeIcon icon={faPen}  className={classes.pencil}/>
      <p>Compose</p>
    </div>
  );
};

export default ComposeButton;
