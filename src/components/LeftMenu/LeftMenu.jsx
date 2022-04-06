import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ComposeButton from "./ComposeButton";
import classes from "./LeftMenu.module.css";
import MailMenu from "./MailMenu";
import { leftMenuActiveStateActions } from "../../store/leftmenu-active-states-slice";
import MailMenuList from "./Mail/MailMenuList";
import MeetMenuList from "./Meet/MeetMenuList";
import SocialMenu from "./SocialMenu";
import ChatMenuList from "./Chat/ChatMenuList";

const LeftMenu = () => {
  const dispatch = useDispatch();

  // Mail active state
  const isMailMenuActive = useSelector((state) => state.leftMenu.isMailActive);
  const onMailExpand = () => {
    dispatch(leftMenuActiveStateActions.onMailClick());
  };

  // Chat active state
  const isChatMenuActive = useSelector((state) => state.leftMenu.isChatActive);
  const onChatExpand = () => {
    dispatch(leftMenuActiveStateActions.onChatClick());
  };
  // Spaces active state
  const isSpacesMenuActive = useSelector(
    (state) => state.leftMenu.isSpacesActive
  );
  const onSpacesExpand = () => {
    console.log("Spaces clicked");
    dispatch(leftMenuActiveStateActions.onSpacesClick());
  };

  // Meet active state
  const isMeetMenuActive = useSelector((state) => state.leftMenu.isMeetActive);
  const onMeetExpand = () => {
    dispatch(leftMenuActiveStateActions.onMeetClick());
  };

  //

  return (
    <div>
      <div className={classes["left-menu"]}>
        <ComposeButton />
      </div>
      <MailMenu
        title="Mail"
        isActive={isMailMenuActive}
        onButtonClick={onMailExpand}
        component={<MailMenuList />}
      />
      <SocialMenu
        title="Chats"
        isActive={isChatMenuActive}
        onButtonClick={onChatExpand}
        component={<ChatMenuList />}
      />
      <SocialMenu
        title="Spaces"
        isActive={isSpacesMenuActive}
        onButtonClick={onSpacesExpand}
        component={<div>Spaces</div>}
      />

      <MailMenu
        title="Meet"
        isActive={isMeetMenuActive}
        onButtonClick={onMeetExpand}
        component={<MeetMenuList />}
      />
    </div>
  );
};

export default LeftMenu;
