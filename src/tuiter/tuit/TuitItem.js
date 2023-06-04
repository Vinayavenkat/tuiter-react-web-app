import React from "react";
import TuitStats from "./TuitStats";


const TuitItem = ({ tuit, onLike }) => {
  const tuitItemStyle = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ddd",
    padding: "10px",
  };

  const tuitHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  };

  const userInfoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const usernameStyle = {
    marginLeft: "5px",
    fontWeight: "bold",
  };

  const tuitImageStyle = {
    borderRadius: "50%",
    marginRight: "10px",
  };

  const tuitTextStyle = {
    display: "flex",
    flexDirection: "column",
  };



  return (
    <div style={tuitItemStyle}>
      <div style={tuitHeaderStyle}>
        <div style={userInfoStyle}>
          <img style={tuitImageStyle} height={48} src={`/images/${tuit.image}`} alt="who-to-follow" />
          <span style={usernameStyle}>{tuit.userName}</span>&nbsp;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.521 2.624a2 2 0 0 1 2.958 0l1.02 1.12a2 2 0 0 0 1.572.651l1.513-.07a2 2 0 0 1 2.092 2.09l-.071 1.514a2 2 0 0 0 .651 1.572l1.12 1.02a2 2 0 0 1 0 2.958l-1.12 1.02a2 2 0 0 0-.651 1.572l.07 1.513a2 2 0 0 1-2.09 2.092l-1.514-.071a2 2 0 0 0-1.572.651l-1.02 1.12a2 2 0 0 1-2.958 0l-1.02-1.12a2 2 0 0 0-1.572-.651l-1.513.07a2 2 0 0 1-2.092-2.09l.071-1.514a2 2 0 0 0-.651-1.572l-1.12-1.02a2 2 0 0 1 0-2.958l1.12-1.02a2 2 0 0 0 .651-1.572l-.07-1.513a2 2 0 0 1 2.09-2.092l1.514.071a2 2 0 0 0 1.572-.651l1.02-1.12Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m9 12l2 2l4-4"/></g></svg>         
          &nbsp;&nbsp;<span>{tuit.handle}</span>
          &nbsp;&nbsp;<div>{tuit.time}</div>
        </div>
      </div>
      <div className="tuit-body" style={{ marginBottom: '40px' }}>
        <div style={tuitTextStyle}>
          <div className="tuit-message">{tuit.tuit}</div>
        </div>
      </div>
      <div className="tuit-footer">
        <TuitStats tuit={tuit} onLike={onLike} />
      </div>
    </div>
  );
};

export default TuitItem;
