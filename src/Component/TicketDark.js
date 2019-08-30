import React from "react";
import {connect} from "react-redux";
import "./TicketDark.css";

var TicketDark = (props) => {
  return (
    <div className="TicketDark">
      <div className="background">
        <img className="ticket" src="./image/Ticket.png" />
        <div className="contain">
          <img className="logo" src="./image/Logo.png" />
          <p className="name">người nhện xa nhà</p>
          <p className="type">Hành động, Khoa học viễn tưởng</p>

          <div className="info">
            <div className="R1">
              <div className="col1_1">
                <p className="gray">Ngày</p>
                <p className="var">{props.date}</p>
              </div>
              <div className="col2_1">
                <p className="gray">Giờ</p>
                <p className="var">{props.time}</p>
              </div>
              <div className="col3_1">
                <p className="gray">Thời lượng</p>
                <p className="var">135 phút</p>
              </div>
            </div>
            <div className="R2">
              <div className="col1_2">
                <p className="gray">Rạp</p>
                <p className="var">3</p>
              </div>
              <div className="col2_2">
                <p className="gray">Hàng</p>
                <p className="var">E</p>
              </div>
              <div className="col3_2">
                <p className="gray">Ghế</p>
                <p className="var">E4, E5</p>
              </div>
              <div className="col4_2">
                <p className="gray">Loại vé</p>
                <p className="var">VIP</p>
              </div>
            </div>
          </div>

          <div className="price_id">
            <div className="cod">
              <p className="gray">Mã vé</p>
              <p className="var">E26G 5628 5632 HF89</p>
            </div>
            <div className="price">
              <p className="gray">Giá</p>
              <p className="var">180 000 đ</p>
            </div>
          </div>
          <div className="QR">
            <img src="./image/QR.png" />
          </div>
        </div>
      </div>

      <button onClick={()=>props.dispatch({type:"SET_SHOW",show:"1"})}>đồng ý</button>
    </div>
  );
};

var makeStateToProps = state => {
  return {
    date: state.date,
    time:state.time
  };
};

export default connect(makeStateToProps)(TicketDark);
