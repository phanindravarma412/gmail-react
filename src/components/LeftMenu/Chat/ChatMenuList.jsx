import React from "react";

import ChatItem from "./ChatItem";
import classes from "./ChatMenuList.module.css";

const ChatMenuList = () => {
  const IMAGE_1 =
    "https://images.generated.photos/KFwyUXzr05DfJtXSEBO84HG873AtpYQ-iUP9nSbBnOo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzEwNDE5LmpwZw.jpg";
  const IMAGE_2 =
    "https://images.generated.photos/huJpeB0dWXXSJcul0U3Mp5dJ_1UeW_myeB4CbEJm0H0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE5MTU1LmpwZw.jpg";
  const IMAGE_3 =
    "https://images.generated.photos/0lmOrDrldGzS_-DFsqwVpishF1RlggNDslhvQ23tiIE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU1ODYzLmpwZw.jpg";
  return (
    <ul className={classes["chat-menu"]}>
      <ChatItem image={IMAGE_1} name="Person 1" message="Hello" />
      <ChatItem image={IMAGE_2} name="Person 2" message="This is a test" />
      <ChatItem image={IMAGE_3} name="Person 3" message="Test 2" />
    </ul>
  );
};

export default ChatMenuList;
