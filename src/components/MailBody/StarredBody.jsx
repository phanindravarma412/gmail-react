import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { allMailsActions } from "../../store/mail-slice";
import MailItem from './MailItem';


const StarredBody = () => {
  const dispatch = useDispatch();

  const mails = useSelector((state) => state.allMails.mails);

  const starredMails =mails.filter(mail => mail.starred);

  const mailsData = starredMails.map((mail) => (
    <MailItem key={mail.id} mail={mail}>
      {mail.from}
    </MailItem>
  ));
  return (
    <div>{mailsData}</div>
  )
}

export default StarredBody