import React from "react";
import "./BookTicket.css";
import { connect } from "react-redux";
import { ButtonTime } from "./Button";

export var SectionTime_Address = props => {
  return (
    <div className="SectionTime_Address">
      <div className="address">
        {props.children.address}
        <span>{props.children.km}</span>
      </div>
      <div className="content">{props.children.content}</div>

      <div className="button">
        {props.children.arr.map(x => (
          <ButtonTime
            focus={
              props.key === props.address && props.time === x.time
                ? true
                : false
            }
            click={() =>
              props.dispatch({
                type: "SET_TIME",
                address: props.key,
                time: x.time
              })
            }
          >
            {x.time}
          </ButtonTime>
        ))}
      </div>
    </div>
  );
};
var makeStateToProps = state => {
  return {
    address: state.address,
    time: state.time
  };
};

export default connect(makeStateToProps)(SectionTime_Address);
