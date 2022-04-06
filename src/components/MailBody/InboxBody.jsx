import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MailItem from "./MailItem";

const InboxBody = () => {

  const mails = useSelector((state) => state.allMails.mails);

  const inboxMails = mails.filter((mail) => mail.type !== "sent");

  console.log("Inbox Mails");
  console.log(inboxMails);

  
  const mailsData = inboxMails.map((mail) => (
    <MailItem key={mail.id} mail={mail}>
      {mail.from}
    </MailItem>
  ));
  return <div>{mailsData}</div>;
};

export default InboxBody;

{
  /* <div className="App">
<h2>Hidden Button in the box. Move mouse in the box</h2>
<div
  style={{
    border: "1px solid gray",
    width: 300,
    height: 300,
    padding: 10,
    margin: 100,
    background: "red"
  }}
  onMouseEnter={(e) => {
    setStyle({ display: "block" });
  }}
  onMouseLeave={(e) => {
    setStyle({ display: "none" });
  }}
>
  <button style={style}>Click</button>
</div>
</div> */
}
