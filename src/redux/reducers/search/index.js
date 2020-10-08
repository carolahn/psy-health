import { GET_PSY, FILTERED_PSY, FILTER_VALUES } from "../../actions/search";

const defaultState = {
  psychologists: [],
  filteredPsy: [],
  fValues: {
    exp: [],
    lang: [],
    price: [],
    name: [],
  },
};

const search = (state = defaultState, { type, psyList, filtered, filterValues }) => {
  switch (type) {
    case GET_PSY:
      return {
        ...state,
        psychologists: psyList,
      };
    case FILTERED_PSY:
      return {
        ...state,
        filteredPsy: filtered,
      };

    case FILTER_VALUES:
      return {
        ...state,
        fValues: filterValues,
      };

    default:
      return state;
  }
};

export default search;
