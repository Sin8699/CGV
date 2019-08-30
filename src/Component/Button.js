import React from "react";
import "./BookTicket.css";

export var ButtonType = props => {
  return <div className={(props.focus===true)?"ButtonType_1":"ButtonType_2"} onClick={()=>props.click()}>{props.children}</div>;
};



export var ButtonDate = props => {
    return <div className={props.focus?"ButtonDate_1":"ButtonDate_2"} onClick={()=>props.click()}>
      <p>{props.stt}</p>
      <p>{props.day}</p>
    </div>;
  };
  

  export var ButtonTime = props => {
    return <div className={(props.focus===true)?"ButtonTime_1":"ButtonTime_2"} onClick={()=>props.click()}>{props.children}</div>;
  };