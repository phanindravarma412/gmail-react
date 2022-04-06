import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faStar,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarMinus,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import MailMenuItem from "./MailMenuItem";
import classes from "./MailMenuList.module.css";

const MailMenuList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandedIcon = isExpanded ? faAngleUp : faAngleDown;

  const extraMenuItems = (
    <div>
      <MailMenuItem
        endPoint="/important"
        title="Important"
        icon={faExclamation}
      />
      <MailMenuItem
        endPoint="/scheduled"
        title="Scheduled"
        icon={faCalendarMinus}
      />
      <MailMenuItem endPoint="/allmails" title="All mails" icon={faEnvelope} />
      <MailMenuItem
        endPoint="/spam"
        title="Spam"
        icon={faFileCircleExclamation}
      />
      <MailMenuItem endPoint="/trash" title="Trash" icon={faTrashCan} />
    </div>
  );
  return (
    <ul className={classes["menu-list"]}>
      <MailMenuItem endPoint="/" title="Inbox" icon={faInbox} />
      <MailMenuItem endPoint="/starred" title="Starred" icon={faStar} />
      <MailMenuItem endPoint="/snoozed" title="Snoozed" icon={faClock} />
      <MailMenuItem endPoint="/sent" title="Sent" icon={faPaperPlane} />
      <MailMenuItem endPoint="/drafts" title="Drafts" icon={faFile} />
      <div
        className={classes.expanded}
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        <FontAwesomeIcon icon={expandedIcon} />
        <p>{isExpanded ? "Less" : "More"}</p>
      </div>
      {isExpanded && extraMenuItems}
    </ul>
  );
};

export default MailMenuList;
