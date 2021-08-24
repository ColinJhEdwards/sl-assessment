import styled from "styled-components";

const Chart = () => {
  return (
    <StyledChart>
      <h2>Chart</h2>
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
