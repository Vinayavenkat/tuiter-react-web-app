import React, { useState } from "react";
import TuitItem from "./TuitItem";

const TuitsList = ({ tuits }) => {
  const [tuitData, setTuitData] = useState(tuits);

  const handleLike = (tuitId, liked) => {
    const updatedTuitData = tuitData.map((tuit) => {
      if (tuit._id === tuitId) {
        return { ...tuit, liked, likes: liked ? tuit.likes + 1 : tuit.likes - 1 };
      }
      return tuit;
    });

    setTuitData(updatedTuitData);
  };

  return (
    <div className="tuits-list">
      {tuitData.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} onLike={handleLike} />
      ))}
    </div>
  );
};

export default TuitsList;
