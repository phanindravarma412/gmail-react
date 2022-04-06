import React from "react";

import RightMenuTab from "./RightMenuTab";
import classes from "./RightMenu.module.css";

const RightMenu = () => {
  const CALENDAR_LOGO =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png";
  const KEEP_NOTES_LOGO =
    "https://www.google.com/images/icons/product/keep-512.png";
  const TASKS_LOGO =
    "https://www.apkmirror.com/wp-content/uploads/2022/02/10/621654b7bf3dd.png";
  const CONTACTS_LOGO =
    "https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png";
  const ZOOM_LOGO =
    "https://blog.logomyway.com/wp-content/uploads/2021/08/zoom-icon.png";

  return (
    <div className={classes["right-menu"]}>
      <RightMenuTab image={CALENDAR_LOGO} />
      <RightMenuTab image={KEEP_NOTES_LOGO} />
      <RightMenuTab image={TASKS_LOGO} />
      <RightMenuTab image={CONTACTS_LOGO} />
      <hr className={classes.hr}/>
      <RightMenuTab image={ZOOM_LOGO} />
    </div>
  );
};

export default RightMenu;
