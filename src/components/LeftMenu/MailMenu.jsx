import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import classes from "./MailMenu.module.css";

const MailMenu = (props) => {
  
 
  const icon = props.isActive ? faCaretDown : faCaretRight;
  const iconActiveClass = props.isActive ? `${classes["icon-active"]}` : "";

  return (
    <div className={classes["main-container"]}>
      <div className={classes.mail}>
        <div className={iconActiveClass}>
          <FontAwesomeIcon onClick={props.onButtonClick} icon={icon} />
        </div>
        <p>{props.title}</p>
      </div>
      {props.isActive &&  props.component}
    </div>
  );
};

export default MailMenu;
