import { GET_PSY } from '../../actions/search'



const search = (state = [], { type, psyList }) => {
  switch(type) {
    case GET_PSY:
      return {
        ...state,
        state: psyList
      }


    default:
      return state;
  }
}

export default search