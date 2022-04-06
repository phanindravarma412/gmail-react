import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./MeetMenuItem.module.css";

const MeetMenuItem = (props) => {
  return (
    <div className={classes["menu-item"]}>
      <li className={classes.tab}>
        <FontAwesomeIcon icon={props.icon} />
        <p>{props.title}</p>
      </li>
    </div>
  );
};

export default MeetMenuItem;
