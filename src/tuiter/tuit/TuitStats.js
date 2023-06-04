import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRetweet, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import "./TuitStats.css"; 

const TuitStats = ({ tuit, onLike }) => {
  const [liked, setLiked] = useState(tuit.liked);

  const handleLike = () => {
    onLike(tuit._id, !liked);
    setLiked(!liked);
  };

  return (
    <div className="tuit-stats-container">
        <span className="stat-item">
        <FontAwesomeIcon icon={faComment} />
        {tuit.replies}
      </span>
     
      <span className="stat-item">
        <FontAwesomeIcon icon={faRetweet} />
        {tuit.retuits}
      </span>
      
      <span onClick={handleLike} className={`like-icon ${liked ? "liked" : ""}`}>
        <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
        {tuit.likes}
      </span>
      
      <span className="stat-item">
        <FontAwesomeIcon icon={faShare} />
      </span>
    </div>
  );
};

export default TuitStats;
