import React from "react";
import styled from "styled-components";
import logo from "../images/stackline_logo1.png";

const Header = () => {
  return (
    <StyledHead className="header">
      <div className="logo">
        <img src={logo} alt="stackline" />
      </div>
    </StyledHead>
  );
};

const StyledHead = styled.header`
  min-height: 5vh;
  background: #1b1c61;
  display: flex;
  align-items: center;
  .logo {
    margin-left: 1rem;
    img {
      height: 2vh;
    }
  }
`;

export default Header;
