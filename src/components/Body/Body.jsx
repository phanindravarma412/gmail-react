import React from "react";

import classes from "./Body.module.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import RightMenu from "../RightMenu/RightMenu";
import MailBody from "../MailBody/MailBody";

const Body = () => {
  return <div className={classes.body}>
    <LeftMenu />
    <MailBody/>
    <RightMenu />
  </div>;
};

export default Body;
