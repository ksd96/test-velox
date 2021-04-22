const actionsAppointmentTypes = {
  CHANGE_CARDS: `CHANGE_CARDS`
};

const actionsAppointment = {
  changeCards: (payload) => ({type: actionsAppointmentTypes.CHANGE_CARDS, payload})
};

export { actionsAppointment, actionsAppointmentTypes };
