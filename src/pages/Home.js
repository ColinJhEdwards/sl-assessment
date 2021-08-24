import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadItemDetail } from "../actions/itemAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadItemDetail());
    console.log("test");
  }, []);

  const itemData = useSelector((state) => state);
  const data = itemData.itemDetail.details;
  console.log(data);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
