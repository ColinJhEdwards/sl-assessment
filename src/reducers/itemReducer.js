const initState = {
  details: { tags: [], sales: [{}] },
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        details: action.payload.item,
      };
    default:
      return state;
  }
};

export default itemReducer;
