import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const CalendarDay = ({day, status, count}) => {
  const getClassItem = classNames({
    "calendar__item": true,
    "calendar__item_no-active": status
  });

  const getClassNumber = classNames({
    "calendar__number": true,
    "calendar__number_no-active": status
  });

  const getClassCount = classNames({
    "calendar__count": true,
    "calendar__count_no-active": count === ""
  });

  return (
    <li className={getClassItem}>
      <p className={getClassNumber}>{day.format("D")}</p>
      <p className={getClassCount}>{count}</p>
    </li>
  )
};

CalendarDay.propTypes = {
  day: PropTypes.object,
  status: PropTypes.bool,
  count: PropTypes.string
};

export default CalendarDay;
