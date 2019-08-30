import React, { useState } from "react";
import "./BookTicket.css";
import { ButtonDate, ButtonType } from "./Button";
import SectionTime_Address from "./SectionTime_Address";
import { connect } from "react-redux";

var BookTicket = props => {
  var [typeFilm, setType] = useState(null);
  return (
    <div className="BookTicket">
      <div className="header">
        <div className="contain">
          <img
            src="./image/Vector.png"
            onClick={() => props.dispatch({ type: "SET_SHOW", show: "2" })}
          />
          <div className="content">
            <div className="title">
              <div>Justice League</div>
              <p> Fantasy, Action, Adventure</p>
              <p>November 17th, 2017 | 1 hr 59 min</p>
            </div>
            <div className="id">PG-13</div>
          </div>
        </div>
      </div>

      <div className="fomat">
        <div className="title">
          <p className="bold">Fomat</p>
          <p className="orange">View all</p>
        </div>
        <div className="sec_type">
          <ButtonType
            focus={typeFilm == 1 ? true : false}
            click={() => {
              setType(1);
            }}
          >
            2D
          </ButtonType>
          <ButtonType
            focus={typeFilm == 2 ? true : false}
            click={() => setType(2)}
          >
            3D
          </ButtonType>
          <ButtonType
            focus={typeFilm == 3 ? true : false}
            click={() => setType(3)}
          >
            4DX
          </ButtonType>
          <ButtonType
            focus={typeFilm == 4 ? true : false}
            click={() => setType(4)}
          >
            IMAX
          </ButtonType>
        </div>
      </div>
      <div className="date">
        <div className="title">
          <p className="bold">Date</p>
          <p className="orange">View all</p>
        </div>
        <div className="sec_date">
          <ButtonDate
            focus={props.date === "17/7" ? true : false}
            stt="Fri"
            day="17"
            click={() => props.dispatch({ type: "SET_DATE", date: "17/7" })}
          />
          <ButtonDate
            focus={props.date === "18/7" ? true : false}
            stt="Sat"
            day="18"
            click={() => props.dispatch({ type: "SET_DATE", date: "18/7" })}
          />
          <ButtonDate
            focus={props.date === "19/7" ? true : false}
            stt="Sun"
            day="19"
            click={() => props.dispatch({ type: "SET_DATE", date: "19/7" })}
          />
          <ButtonDate
            focus={props.date === "20/7" ? true : false}
            stt="Mon"
            day="20"
            click={() => props.dispatch({ type: "SET_DATE", date: "20/7" })}
          />
        </div>
      </div>

      <div className="Showtime">
        <div className="title">
          <p className="bold">Showtimes</p>
          <p className="orange">View all</p>
        </div>
        {props.data.map((x, index) => (
          <SectionTime_Address key={index}>{x}</SectionTime_Address>
        ))}
      </div>

      <button
        onClick={() => {
          if (props.date !== null && props.time !== null && typeFilm!==null)
            props.dispatch({ type: "SET_SHOW", show: "4" });
        }}
      >
        Next
      </button>
    </div>
  );
};

var makeStateToProps = state => {
  return {
    data: state.data,
    date: state.date,
    time: state.time
  };
};

export default connect(makeStateToProps)(BookTicket);
