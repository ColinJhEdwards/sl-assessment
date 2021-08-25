import styled from "styled-components";
import { useSelector } from "react-redux";
import Info from "./Info";

const Table = () => {
  const itemData = useSelector((state) => state);
  const data = itemData.itemDetail.details;
  const tableData = data.sales;
  return (
    <StyledTable>
      <div className="labels">
        <h3>WEEK ENDING</h3>
        <h3>RETAILS SALES</h3>
        <h3>WHOLESALE SALES</h3>
        <h3>UNITS SOLD</h3>
        <h3>RETAILER MARGIN</h3>
      </div>
      <div className="data">
        {tableData.map((i) => (
          <Info
            weekEnding={i.weekEnding}
            retailSales={i.retailSales}
            wholeSales={i.wholesaleSales}
            unitsSold={i.unitsSold}
            retailerMargin={i.retailerMargin}
          />
        ))}
      </div>
    </StyledTable>
  );
};

const StyledTable = styled.div`
  height: 25vh;
  width: 80rem;
  box-shadow: 0px 1px 4px rgba(167, 167, 167, 0.5);
  background: white;
  margin-left: 2rem;
  margin-top: 2rem;
  overflow-y: scroll;

  .labels {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0rem;
    position: sticky;
    top: 0;
    z-index: 1;
    background: white;
  }
  @media (max-width: 1440px) {
    width: 50rem;
    .labels {
      font-size: 0.8rem;
    }
  }
`;

export default Table;
