import React from "react";
import { connect } from "react-redux";
import HomeScreen from "./Component/HomeScreen";
import ContentDark from "./Component/ContentDark";
import BookTicket from "./Component/BookTicket";
import TicketDark from "./Component/TicketDark";
import "./App.css";

var App = props => {
  return (
    <div className="App">
      {props.show === "1" ? (
        <HomeScreen />
      ) : props.show === "2" ? (
        <ContentDark />
      ) : props.show === "3" ? (
        <BookTicket />
      ) : (
        <TicketDark />
      )}
    </div>
  );
};

var makeStateToProps = state => {
  return {
    show: state.show
  };
};
export default connect(makeStateToProps)(App);
