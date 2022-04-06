import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MailItem from "./MailItem";

const SentBody = () => {
  const mails = useSelector((state) => state.allMails.mails);

  const sentMails = mails.filter((mail) => mail.type === "sent");

  const mailsData = sentMails.map((mail) => (
    <MailItem key={mail.id} mail={mail}>
      {mail.from}
    </MailItem>
  ));
  return <div>{mailsData}</div>;
};

export default SentBody;
