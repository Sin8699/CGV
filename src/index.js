import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var dataDefault = {
  data: [
    {
      address: "CGV Aeon Tan Phu",
      km: "0.98km",
      content:
        "Level 3, Aeon Mall 30 Bo Bao Tan Thang, Son Ky Ward, Tan Phu District, Ho Chi Minh City",
      arr: [
        { focus: true, time: "10:05" },
        { focus: false, time: "11:50" },
        { focus: false, time: "12:50" },
        { focus: false, time: "14:30" }
      ]
    },
    {
      address: "CGV Pandora City",
      km: "1.37km",
      content:
        "Level 3, Pandora City 1 Truong Chinh, Tay Thanh Ward, Tan Phu District, Ho Chi Minh City",
      arr: [
        { focus: true, time: "10:30" },
        { focus: false, time: "13:00" },
        { focus: false, time: "15:30" },
        { focus: false, time: "18:00" }
      ]
    },
    {
      address: "CGV Hoang Van Thu",
      km: "3.87km",
      content:
        "Level 2, Gala Center 415 Hoang Van Thu, Ward 2, Tan Binh District, Ho Chi Minh City",
      arr: [
        { focus: true, time: "11:00" },
        { focus: false, time: "16:10" },
        { focus: false, time: "18:50" }
      ]
    }
  ],
  show: "1",
  date: null,
  time: null,
  address: null
};
var reducer = (state = dataDefault, action) => {
  if (action.type === "SET_FOCUS") return state;
  if (action.type === "SET_SHOW") return { ...state, show: action.show };
  if (action.type === "SET_DATE") return { ...state, date: action.date };
  if (action.type === "SET_TIME")
    return { ...state, time: action.time, address: action.address };
  return state;
};

var store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
