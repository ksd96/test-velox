import "./style/calendar.scss";
import iconLeft from "./img/icon-left.svg";
import iconRight from "./img/icon-right.svg";
import PropTypes from 'prop-types';
import { useState, useCallback } from "react";
import CalendarDay from "../CalendarDay/CalendarDay";
import { FORMAT_DATE } from "../../consts/consts";

const Calendar = ({month, datesItems}) => {
  const [stateMonth, setStateMonth] = useState(month);

  const getNextMonth = useCallback(() => {
    setStateMonth(stateMonth.clone().add(1, "month"));
  }, [stateMonth]);

  const getPreviousMonth = useCallback(() => {
    setStateMonth(stateMonth.clone().subtract(1, "month"));
  }, [stateMonth]);

  const getDays = useCallback(() => {
    const firstDay = stateMonth.clone().startOf("month").startOf("week").add(1, "day");
    const endDay = stateMonth.clone().endOf("month");

    const daysArray = [];
    let day = firstDay;

    while(!day.isAfter(endDay)) {
      daysArray.push(day.clone());
      day.add(1, "day");
    }

    return(daysArray);
  }, [stateMonth]);

  return (
    <div className="calendar">
      <div className="calendar__wrapper-top">
        <button onClick={getPreviousMonth} className="calendar__button">
          <img src={iconLeft} alt="кнопка влево" />
        </button>
        <h2 className="calendar__title">{stateMonth.format(FORMAT_DATE.CALENDAR_TITLE)}</h2>
        <button onClick={getNextMonth} className="calendar__button">
          <img src={iconRight} alt="кнопка влево" />
        </button>
      </div>
      <ul className="calendar__wrapper-days">
        <li className="calendar__day">Пн</li>
        <li className="calendar__day">Вт</li>
        <li className="calendar__day">Ср</li>
        <li className="calendar__day">Чт</li>
        <li className="calendar__day">Пт</li>
        <li className="calendar__day">Сб</li>
        <li className="calendar__day">Вс</li>
      </ul>
      <ul className="calendar__list">
        {
          getDays().map((day) => {
            let count = "";
            if (datesItems[day.format("YYYY-MM--DD")]) {
              count = `${datesItems[day.format("YYYY-MM--DD")].count}`;
            };

            if(day.format("YYYY-MM") !== stateMonth.format("YYYY-MM")) {
              return (
                <CalendarDay count={count} key={day.format("DD.MM.YYYY")} day={day} status={true} />
              )
            } else {
              return (
                <CalendarDay count={count} key={day.format("DD.MM.YYYY")} day={day} status={false} />
              )
            }
          })
        }
      </ul>
    </div>
  )
};

Calendar.propTypes = {
  month: PropTypes.object,
  datesItems: PropTypes.objectOf(PropTypes.shape({
    count: PropTypes.number
  }))
};

export default Calendar;
