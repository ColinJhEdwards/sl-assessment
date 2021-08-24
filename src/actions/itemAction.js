import axios from "axios";

export const loadItemDetail = () => async (dispatch) => {
  const itemDetails = await axios.get(
    "https://api.jsonbin.io/b/6124515ec5159b35ae02fe3f"
  );
  dispatch({
    type: "FETCH_DATA",
    payload: {
      item: itemDetails.data[0],
    },
  });
};
