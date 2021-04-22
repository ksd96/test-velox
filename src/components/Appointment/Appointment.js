import moment from 'moment';
import PropTypes from 'prop-types';
import "./styles/appointment.scss";
import { FORMAT_DATE } from '../../consts/consts';

const Appointment = ({data}) => {
  return (
    <div className="appointment">
      <p className="appointment__date">{moment.unix(data.date).format(FORMAT_DATE.APPOINTMENT_CARD)}</p>
      <p className="appointment__place">{data.place}</p>
      <div className="appointment__wrapper">
        <div className="appointment__doctor">
          <img className="appointment__doctor-photo" src={data.photo} alt="фото врача" />
          <div className="appointment__doctor-info">
            <p className="appointment__doctor-name">{data.doctor}</p>
            <p className="appointment__department">{data.department}</p>
          </div>
        </div>
        <button className="appointment__button" type="button">Отменить</button>
      </div>
    </div>
  )
};

Appointment.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    department: PropTypes.string,
    doctor: PropTypes.string,
    photo: PropTypes.string,
    place: PropTypes.string
  })
};

export default Appointment;
