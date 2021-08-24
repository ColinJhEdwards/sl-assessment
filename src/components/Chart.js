import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { loadItemDetail } from "../actions/itemAction";

const Chart = () => {
  //     const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(loadItemDetail());

  //   }, []);

  //   const itemData = useSelector((state) => state);
  //   const data = itemData.itemDetail.details;
  return (
    <StyledChart>
      <LineChart width={"100%"} height={"100%"} data={"me"}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </StyledChart>
  );
};

const StyledChart = styled.div`
  min-height: 60vh;
  width: 70vw;
  box-shadow: 0px 1px 4px rgba(167, 167, 167, 0.5);
  background: white;
  margin-left: 2rem;
`;

export default Chart;
