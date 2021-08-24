import { itemData } from "../data";

export const loadItemDetail = () => async (dispatch) => {
  const itemDetails = itemData();
  dispatch({
    type: "FETCH_DATA",
    payload: {
      details: itemDetails,
    },
  });
};
