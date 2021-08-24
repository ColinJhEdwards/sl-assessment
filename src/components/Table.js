import styled from "styled-components";

const Table = () => {
  return (
    <StyledTable>
      <h2>table</h2>
    </StyledTable>
  );
};

const StyledTable = styled.div`
  min-height: 25vh;
  width: 70vw;
  box-shadow: 0px 1px 4px rgba(167, 167, 167, 0.5);
  background: white;
  margin-left: 2rem;
  margin-top: 2rem;
`;

export default Table;
