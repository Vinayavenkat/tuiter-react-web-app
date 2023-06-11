import React, { useState } from "react";
import tuit from '../tuit-summary-list/tuits.json';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

import { IoChatbubbleOutline, IoRepeat, IoHeart, IoHeartOutline, IoCloudUploadOutline, IoThumbsDown, IoThumbsDownOutline } from "react-icons/io5";

function TuitStats({ comments, retweets, likes, dislikes, liked, disliked }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
    dispatch(updateTuitThunk({ ...tuit, likes: likeCount }));
  };

  const handleDislikeClick = () => {
    const newDislikeCount = dislikeCount + 1;
    setDislikeCount(newDislikeCount);
    dispatch(updateTuitThunk({ ...tuit, dislikes: newDislikeCount }));
  };

  const LikeIcon = isLiked ? IoHeart : IoHeartOutline;
  const likeColor = isLiked ? "red" : "";
  const DislikeIcon = disliked ? IoThumbsDown : IoThumbsDownOutline;
  const dislikeColor = disliked ? "blue" : "";

  return (
    <div className="row mt-2 text-secondary">
      <div className="col">
        <IoChatbubbleOutline />&nbsp;
        <span className="comments">{comments}</span>
      </div>
      <div className="col">
        <IoRepeat />&nbsp;
        <span className="retweets">{retweets}</span>
      </div>
      <div className="col" onClick={handleLikeClick}>
        <LikeIcon style={{ color: likeColor }} />&nbsp;
        <span>{likeCount}</span>
      </div>
      <div className="col" onClick={handleDislikeClick}>
        <DislikeIcon style={{ color: dislikeColor }} />&nbsp;
        <span>{dislikeCount}</span>
      </div>
      <div className="col">
        <IoCloudUploadOutline />
      </div>
    </div>
  );
}

export default TuitStats;
