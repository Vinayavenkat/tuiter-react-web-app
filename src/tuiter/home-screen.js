import React from "react";
import TuitItem from "../tuiter/tuit/TuitItem";
import tuitsData from "../tuiter/reducers/tuit.json";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
  const handleLike = (tuitId, liked) => {
    console.log(`Tuit ID: ${tuitId}, Liked: ${liked}`);
  };

  return (
    <div>
      <WhatsHappening/>
      {tuitsData.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} onLike={handleLike} />
      ))}
    </div>
  );
};

export default HomeScreen;
