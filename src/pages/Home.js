import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { loadItemDetail } from "../actions/itemAction";
import Chart from "../components/Chart";
import Table from "../components/Table";
import ItemInfo from "../components/ItemInfo";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadItemDetail());
  }, []);

  return (
    <StyledHome>
      <div className="content">
        <div className="info">
          <ItemInfo />
        </div>
        <div className="data">
          <Chart />
          <Table />
        </div>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  min-height: 95vh;
  background: #ececec;
  .content {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }
`;

export default Home;
