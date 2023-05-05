import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';


export const getFilteredCards = ({ cards, search }, columnId) => cards.filter(card => card.columnId === columnId && card.title.includes(search.toLowerCase()));
export const getAllColumns = state => state.columns;
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addSearch = payload => ({ type: 'ADD_SEARCH', payload });
export const resetSearch = () => ({ type: 'RESET_SEARCH' });
export const addList = payload => ({ type: 'ADD_LIST', payload });

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = state => state.lists;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] }
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.payload] }
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }] }
    case 'ADD_SEARCH':
      return { ...state, search: action.payload }
    case 'RESET_SEARCH':
      return { ...state, search: '' }
    default:
      return state;
  };

}
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;