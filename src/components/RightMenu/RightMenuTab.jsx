import React from 'react'

import classes from "./RightMenuTab.module.css"

const RightMenuTab = (props) => {
  return (
    <div className={classes.tab}>
        <img src={props.image} alt="" />
    </div>
  )
}

export default RightMenuTab