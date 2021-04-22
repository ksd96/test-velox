import { actionsAppointmentTypes } from "../actions/actionsAppointment";
import initialStates from "../initialStates/initialStates";

const reducerAppointment= (state = initialStates.appointment, action) => {
  switch(action.type) {
    case actionsAppointmentTypes.CHANGE_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    default:
      return state;
  };
};

export default reducerAppointment;
