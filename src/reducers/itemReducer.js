const initState = {
  details: [],
};

const itemReducer =
  () =>
  (state = initState, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        return {
          ...state,
          details: action.payload.details,
        };
      default:
        return { ...state };
    }
  };

export default itemReducer;
