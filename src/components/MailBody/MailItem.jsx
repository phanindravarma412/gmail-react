import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as star } from "@fortawesome/free-regular-svg-icons";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import classes from "./MailItem.module.css";
import { allMailsActions } from "../../store/mail-slice";

const MailItem = (props) => {
  const dispatch = useDispatch();

  const onMailStarred = (id) => {
    console.log(id);

    dispatch(allMailsActions.onStarred(id));
  };

  const onDeleteMail = (id) => {
    dispatch(allMailsActions.onDelete(id));
    console.log(id);
  };
  const icon = props.mail.starred ? faStar : star;
  const iconClasses = props.mail.starred
    ? `${classes.starred}`
    : `${classes.icon}`;
  return (
    <div className={classes.mail}>
      <div className={classes.name}>
        <div className={classes["checkbox-wrapper"]}>
          <input type="checkbox" id="select" />
          <label htmlFor="select"></label>
        </div>
        <FontAwesomeIcon
          icon={icon}
          className={iconClasses}
          onClick={() => onMailStarred(props.mail.id)}
        />
        <p>{props.mail.from}</p>
      </div>
      <div className={classes.message}>
        <p>
          <span>{props.mail.subject}</span> - {props.mail.message}
        </p>
      </div>
      <div className={classes.date}>
        <p>Mar 22</p>
      </div>
      <div className={classes.options}>
        <FontAwesomeIcon icon={faBoxArchive} className={classes.option} />
        <FontAwesomeIcon
          icon={faTrashCan}
          className={classes.option}
          onClick={() => onDeleteMail(props.mail.id)}
        />
        <FontAwesomeIcon icon={faEnvelope} className={classes.option} />
        <FontAwesomeIcon icon={faClock} className={classes.option} />
      </div>
    </div>
  );
};

export default MailItem;
