import "./styles/appointments-more.scss";
import Appointment from "../Appointment/Appointment";
import { Link } from 'react-router-dom';
import Calendar from "../Calendar/Calendar";
import moment from 'moment';
import localization from 'moment/locale/ru';
import PropTypes from 'prop-types';
import { useCallback } from "react";

const AppointmentsMore = ({cards}) => {
  moment.updateLocale('ru', localization);

  const getMonth = useCallback(() => {
    if(Object.values(cards).length !== 0) {
      const month = Object.values(cards)[0].date;
      return moment.unix(month);
    } else {
      return moment();
    };
  }, [cards]);

  const getDatesAppointments = useCallback(() => {
    const dates = {};
    Object.values(cards).forEach((item) => {
      const dateItem = moment.unix(item.date).format("YYYY-MM--DD");
      const newItem = {};
      if (dates[dateItem]) {
        dates[dateItem].count++
      } else {
        newItem.count = 1;
        dates[dateItem] = newItem;
      };

    });
    return dates;
  }, [cards]);

  return (
    <section className="appointments-more">
      <Link className="appointments-more__button-back" to="/">Мои записи</Link>
      <div className="appointments-more__wrapper">
        <ul className="appointments-more__list">
          {
            Object.values(cards).map((card) => {
              return (
                <li key={card.date} className="appointments-more__item">
                  <Appointment data={card} />
                </li>
              )
            })
          }
        </ul>
        <Calendar datesItems={getDatesAppointments()} month={getMonth()} />
      </div>
    </section>
  )
};

AppointmentsMore.propTypes = {
  cards: PropTypes.objectOf(PropTypes.shape({
    date: PropTypes.string,
    department: PropTypes.string,
    doctor: PropTypes.string,
    photo: PropTypes.string,
    place: PropTypes.string
  }))
};

export default AppointmentsMore;
