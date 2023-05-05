export const addSearch = payload => ({ type: ADD_SEARCH, payload });
export const resetSearch = () => ({ type: RESET_SEARCH });

const ADD_SEARCH = 'app/search/ADD_SEARCH';
const RESET_SEARCH = 'app/search/RESET_SEARCH';

const searchReducer = (statePart = '', action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return action.payload
    case RESET_SEARCH:
      return '';
    default:
      return statePart;
  }
}

export default searchReducer;