import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loadItemDetail } from "../actions/itemAction";

const ItemInfo = () => {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(loadItemDetail());
  //   }, []);

  const itemData = useSelector((state) => state);
  const data = itemData.itemDetail.details;
  return (
    <StyledItemInfo>
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      <div className="tags">
        {data.tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
    </StyledItemInfo>
  );
};

const StyledItemInfo = styled.div`
  min-height: 90vh;
  width: 30rem;
  box-shadow: 0px 1px 4px rgba(167, 167, 167, 0.5);
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }
  p {
    text-align: center;
    width: 80%;
    color: gray;
  }
  .tags {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    border-top: 1px solid rgba(182, 181, 181, 0.5);
    border-bottom: 1px solid rgba(182, 181, 181, 0.5);
    p {
      width: 25%;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 3px rgba(114, 114, 114, 0.5);
      border-radius: 10px;
      padding: 0.5rem;
      margin: 0.5rem 1rem;
    }
  }
`;

export default ItemInfo;
