import "./styles/appointments.scss";
import Appointment from "../Appointment/Appointment";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCallback } from "react";
import { COUNT_CARDS_TO_RENDER } from "../../consts/consts";

const Appointments = ({cards}) => {
  const getCardsToRender = useCallback(() => {
    let number = 0;
    const cardsToRender = [];
    Object.values(cards).forEach((item) => {
      if (number < COUNT_CARDS_TO_RENDER) {
        number++
        cardsToRender.push(item);
      }
    });
    return cardsToRender;
  }, [cards]);

  return (
    <section className="appointments">
      <h2 className="appointments__title">Записи на прием</h2>
      <div className="appointments__wrapper">
        <ul className="appointments__list">
          {
            getCardsToRender().map((card) => {
              return (
                <li key={card.date} className="appointments__item">
                  <Appointment data={card} />
                </li>
              )
            })
          }
        </ul>
        <div className="appointments__more">
          <p className="appointments__more-text">Еще {Object.values(cards).length - COUNT_CARDS_TO_RENDER} записи</p>
          <Link className="appointments__link" to="/profile-more">Подробнее</Link>
        </div>
      </div>
    </section>
  )
};

Appointments.propTypes = {
  cards: PropTypes.objectOf(PropTypes.shape({
    date: PropTypes.string,
    department: PropTypes.string,
    doctor: PropTypes.string,
    photo: PropTypes.string,
    place: PropTypes.string
  }))
};

export default Appointments;
