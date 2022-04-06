import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.css";
import IconButton from "./IconButton";

const Header = () => {
  const GMAIL_LOGO =
    "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png";
  return (
    <div className={classes.header}>
      <div className={classes["logo-div"]}>
        <IconButton icon={faBars} />

        <img src={GMAIL_LOGO} alt="GMAIL LOGO" width="140px" />
      </div>
      <div className={classes["search-div"]}>
        <div className={classes["search-icon"]}>
          <IconButton
            icon={faMagnifyingGlass}
            className={classes["search-icon"]}
          />
        </div>

        <input type="text" id="search" placeholder="Search mail" />
        <div className={classes["filter-icon"]}>
          <IconButton icon={faFilter} />
        </div>
      </div>
      <div className={classes["icons-div"]}>
        <IconButton icon={faCircleQuestion} />
        <IconButton icon={faGear} />
        <IconButton icon={faBars} />
        <IconButton icon={faUser} />
      
      </div>
    </div>
  );
};

export default Header;
