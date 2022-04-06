import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import InboxBody from "./InboxBody";
import StarredBody from "./StarredBody";
import SnooozedBody from "./SnooozedBody";
import SentBody from "./SentBody";
import DraftsBody from "./DraftsBody";
import ImportantBody from "./ImportantBody";
import ScheduledBody from "./ScheduledBody";
import AllMailBody from "./AllMailBody";
import SpamBody from "./SpamBody";
import TrashBody from "./TrashBody";


const MailBody = () => {
  return (
    <div style={{flex: 1}}>
      <Routes>
        <Route path='/' element={<InboxBody />} />
        <Route path='/starred' element={<StarredBody />} />
        <Route path='/snoozed' element={<SnooozedBody />} />
        <Route path='/sent' element={<SentBody />} />
        <Route path='/drafts' element={<DraftsBody />} />
        <Route path='/important' element={<ImportantBody />} />
        <Route path='/scheduled' element={<ScheduledBody />} />
        <Route path='/allmails' element={<AllMailBody />} />
        <Route path='/spam' element={<SpamBody />} />
        <Route path='/trash' element={<TrashBody />} />
      </Routes>
    </div>
  )
}

export default MailBody