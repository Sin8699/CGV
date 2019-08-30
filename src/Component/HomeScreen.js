import React from "react";
import { connect } from "react-redux";
import "./HomeScreen.css";

var HomeScreen = props => {
  return (
    <div className="HomeScreen">
      <div className="Header">
        <img className="Logo" src="./image/Logo.png" />
        <img className="Search" src="./image/Search.png" />
      </div>

      <div className="Poster">
        <div className="title">Now showing</div>
        <div className="containPos">
          <img
            className="P1"
            src="./image/Poster 1.png"
            onClick={()=>props.dispatch({ type: "SET_SHOW", show: "2" })}
          />
          <img
            className="P2"
            src="./image/Poster 2.png"
            onClick={()=>props.dispatch({ type: "SET_SHOW", show: "2" })}
          />
        </div>
      </div>

      <div className="CoomingSoon">
        <div className="title">
          <p>Coming soon</p>
          <span>View all</span>
        </div>
        <div className="containImg">
          <img src="./image/P1.png" />
          <img src="./image/P2.png" />
          <img src="./image/P3.png" />
        </div>
      </div>

      <div className="MenuOffers">
        <div className="title">
          <p>New &amp; Offers</p>
          <span>More offers</span>
        </div>

        <div className="containNew">
          <div className="com1">
            <img src="./image/Banner1.png" />
            <div className="com1Title">
              <p className="name">Milo Day - Chỉ 39k cho một vé xem phim 2D</p>
              <p className="date">November 16nd, 2017</p>
            </div>
          </div>
          <div className="com1">
            <img src="./image/Banner2.png" />
            <div className="com1Title">
              <p className="name">Milo Day - Chỉ 39k cho một vé xem phim 2D</p>
              <p className="date">November 16nd, 2017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(HomeScreen);
