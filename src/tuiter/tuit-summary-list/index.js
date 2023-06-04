import React from "react";
import { useSelector } from "react-redux";
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = () => {
  const tuits = useSelector(state => state.tuits); // Access the `tuits` state from the Redux store

  if (!tuits) {
    return null; // Render null or a loading indicator if `tuits` is undefined
  }

  return (
    <ul className="list-group">
      {tuits.map(tuit => (
        <TuitSummaryItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};

export default TuitSummaryList;
