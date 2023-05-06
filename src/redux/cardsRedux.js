import shortid from 'shortid';

export const getFilteredCards = ({ cards, search }, columnId) => cards.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(search.toLowerCase()));
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload });

const ADD_CARD = 'app/search/ADD_CARD';
const REMOVE_CARD = 'app/search/REMOVE_CARD';
const TOGGLE_CARD_FAVORITE = 'app/search/TOGGLE_CARD_FAVORITE';

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_CARD:
      return statePart.filter(card => (card.id !== action.payload))
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
}

export default cardsReducer;