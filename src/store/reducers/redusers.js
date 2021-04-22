import { combineReducers } from 'redux';
import reducerAppointment from './reducerAppointment';

const reducers = combineReducers({
  appointment: reducerAppointment
});

export default reducers;
