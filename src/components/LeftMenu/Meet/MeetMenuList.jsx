import React from 'react';

import MeetMenuItem from './MeetMenuItem';
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import classes from "./MeetMenuList.module.css";

const MeetMenuList = () => {
  return (
    <ul className={classes.menu}>
        <MeetMenuItem icon={faVideoCamera} title="New meeting"/>
        <MeetMenuItem icon={faCalendar} title="My meetings"/>
    </ul>
  )
}

export default MeetMenuList