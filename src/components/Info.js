import styled from "styled-components";

const Info = ({
  weekEnding,
  retailSales,
  wholeSales,
  unitsSold,
  retailerMargin,
}) => {
  return (
    <StyledInfo>
      <h3>{weekEnding}</h3>
      <h3>${retailSales}</h3>
      <h3>${wholeSales}</h3>
      <h3>{unitsSold}</h3>
      <h3>${retailerMargin}</h3>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #b6b6b67f;
  padding: 1rem 0rem;
  color: gray;
  font-size: 0.8rem;

  h3 {
    width: 80px;
  }
`;

export default Info;
