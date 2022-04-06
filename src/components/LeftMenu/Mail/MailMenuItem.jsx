import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./MailMenuItem.module.css";

const MailMenuItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  console.log(`${props.title} ${isActive}`);

  const inboxClasses =
    props.title === "Inbox"
      ? `${classes.tab} ${classes["tab-active"]}`
      : `${classes.tab} ${classes["tab-grey"]}`;

  const menuClasses = !isActive ? `${classes.tab}` : inboxClasses;

  return (
    <div className={classes["menu-item"]}>
      <NavLink
        to={props.endPoint}
        className={({ isActive }) => setIsActive(isActive)}
      >
        <li className={menuClasses}>
          <FontAwesomeIcon icon={props.icon} />
          <p>{props.title}</p>
        </li>
      </NavLink>
    </div>
  );
};

export default MailMenuItem;
