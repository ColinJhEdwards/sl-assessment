import React, { useEffect } from "react";

import styled from "styled-components";

import Chart from "../components/Chart";
import Table from "../components/Table";
import ItemInfo from "../components/ItemInfo";

const Home = () => {
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
