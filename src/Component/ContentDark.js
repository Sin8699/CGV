import React from "react";
import "./ContentDark.css";
import { connect } from "react-redux";

var ContentDark = (props) => {
  return (
    <div className="ContentDark">
      <img className="img" src="./image/back.png" onClick={()=>props.dispatch({type:"SET_SHOW",show:"1"})}/>
      <div className="spider">
      <img  src="./image/Union.png" />
      </div>
      <div className="title">
        <p className="name">Người nhện về nhà</p>
        <p className="type">Hành động, Khoa học viễn tưởng</p>
        <img className="star" src="./image/Group.png" />
      </div>
      <hr />
      <div className="col">
        <div className="year">
          <p className="top">Năm</p>
          <p className="botom">2019</p>
        </div>
        <div className="location">
          <p className="top">Quốc gia</p>
          <p className="botom">USD</p>
        </div>
        <div className="time">
          <p className="top">Thời lượng</p>
          <p className="botom">135 phút</p>
        </div>
      </div>
      <hr />
      <div className="des">
        <p>Cốt truyện</p>
        <div>
          Hậu chiến Vô Cực, Người Nhện Peter Parker và nhóm bạn thân cùng tham
          gia chuyến du lịch châu Âu của trường. Tuy nhiên, kế hoạch siêu anh
          hùng nghỉ phép của Peter nhanh chóng bị hủy bỏ sau khi cậu đồng ý giúp
          Nick Fury khám phá bí ẩn về những cuộc tấn công của nhóm kẻ thù mang
          sức mạnh nguyên tố đang tàn phá khắp lục địa.
        </div>
      </div>
      <hr />
      <div className="actions">
        <img src="./image/DienVien.png" />
      </div>
      <hr />
      <div className="comment">
        <p>Đánh giá</p>
        <div className="contain">
          <img src="./image/Ellipse.png" />
          <div className="content">
            <img src="./image/Group.png" />
            <p>Phim rất hay</p>
            <div className="like">
              <img src="./image/Like.png" />
              25
            </div>
          </div>
        </div>
      </div>
      <div className="BuyTicket">
        <button onClick={()=>props.dispatch({type:"SET_SHOW",show:"3"})}>Đặt vé</button>
      </div>
    </div>
  );
};

export default connect()(ContentDark);
