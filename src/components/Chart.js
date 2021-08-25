import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { useSelector, useDispatch } from "react-redux";

const Chart = () => {
  const itemData = useSelector((state) => state);
  const data = itemData.itemDetail.details;

  const graphData = data.sales;
  console.log(graphData);

  return (
    <StyledChart>
      <h2>Retail Sales</h2>
      <div className="chart">
        <LineChart width={1300} height={500} data={graphData}>
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="#1209c5"
            dot={false}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#3c3c3d"
            dot={false}
            strokeWidth={3}
          />
          <XAxis dataKey="weekEnding" />
          <YAxis hide={true} />
        </LineChart>
      </div>
    </StyledChart>
  );
};

const StyledChart = styled.div`
  min-height: 60vh;
  width: 70vw;
  box-shadow: 0px 1px 4px rgba(167, 167, 167, 0.5);
  background: white;
  margin-left: 2rem;
  h2 {
    padding: 1rem;
  }
  .chart {
    margin-left: 2rem;
  }
`;

export default Chart;
