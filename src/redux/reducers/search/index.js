import { GET_PSY, FILTERED_PSY} from '../../actions/search'

const defaultState = {
  psychologists: [],
  filteredPsy: [],

}

const search = (state = defaultState, { type, psyList, filtered } ) => {
  switch(type) {
    case GET_PSY:
      return {
        ...state,
        psychologists: psyList
      }
    case FILTERED_PSY:
      return {
        ...state,
        filteredPsy: filtered
      }

    default:
      return state;
  }
}

export default search