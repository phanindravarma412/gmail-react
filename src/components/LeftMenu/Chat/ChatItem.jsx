import React from "react";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import classes from "./ChatItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatItem = (props) => {
  const IMAGE =
    "https://images.generated.photos/KFwyUXzr05DfJtXSEBO84HG873AtpYQ-iUP9nSbBnOo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzEwNDE5LmpwZw.jpg";
  return (
    <div className={classes["chat-item"]}>
      <li className={classes.chat}>
        <img src={props.image} alt="PERSON 1" />
        <div className={classes.message}>
          <h4>{props.name}</h4>
          <p>{props.message}</p>
        </div>
      </li>
      <FontAwesomeIcon icon={faEllipsisVertical} className={classes["menu-icon"]}/>
    </div>
  );
};

export default ChatItem;
