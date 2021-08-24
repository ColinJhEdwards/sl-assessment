import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadItemDetail } from "../actions/itemAction";
import { itemData } from "../data";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadItemDetail());
  }, []);

  const data = useSelector((state) => state);
  console.log(data);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
