import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./SocialMenu.module.css";

const SocialMenu = (props) => {
  const icon = props.isActive ? faCaretDown : faCaretRight;
  const iconClasses = props.isActive
    ? `${classes["icon-active"]}`
    : `${classes.icon}`;
  return (
    <div className={classes["social-wrapper"]}>
      <div className={classes.social}>
        <div className={classes.title}>
          <FontAwesomeIcon
            icon={icon}
            onClick={props.onButtonClick}
            className={iconClasses}
          />
          <p>{props.title}</p>
        </div>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      {props.isActive && props.component}
    </div>
  );
};

export default SocialMenu;
