import { GET_DEPOIMENTS, DELETE_DEPOIMENTS, POST_DEPOIMENTS } from "../../actions/depoiments";

const defaultState = { allDepoiments: {} };

const depoiments = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_DEPOIMENTS:
      const { allDepoiments } = payload;
      return { ...state, allDepoiments: { ...allDepoiments } };
    case POST_DEPOIMENTS:
      return state;
    default:
      return state;
  }
};

export default depoiments;
