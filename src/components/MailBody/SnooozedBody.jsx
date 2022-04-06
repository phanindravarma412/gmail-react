import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MailItem from "./MailItem";

const SnooozedBody = () => {
  const mails = useSelector((state) => state.allMails.mails);

  const snoozedMails = mails.filter((mail) => mail.type === "snoozed");

  const mailsData = snoozedMails.map((mail) => (
    <MailItem key={mail.id} mail={mail}>
      {mail.from}
    </MailItem>
  ));
  return <div>{mailsData}</div>;
};

export default SnooozedBody;
