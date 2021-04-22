import { api } from './api.js';
import { actionsAppointment } from '../actions/actionsAppointment.js';

const getCards = () => {
  return dispatch => {
    api.getCards().then((cards) => {
      dispatch(actionsAppointment.changeCards(cards));
    });
  };
};

export default getCards;
