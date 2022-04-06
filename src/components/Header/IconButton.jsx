import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./IconButton.module.css";

const IconButton = (props) => {
  return (
    <div className={classes["icon-container"]}>
      <FontAwesomeIcon icon={props.icon} size="2x" />
    </div>
  );
};

export default IconButton;
