import "./styles/medical-card.scss";
import imageCard from "./img/icon-card.svg";
import imageLab from "./img/icon-lab.svg";
import imageAdd from "./img/icon-add.svg";
import imageHistory from "./img/icon-history.svg";

const MedicalCard = () => {
  return (
    <section className="medical-card">
      <h2 className="medical-card__title">Электронная карта</h2>
      <ul className="medical-card__list">
        <li className="medical-card__item medical-card__item_info">
          <div className="medical-card__icon-container medical-card__icon-container_info">
            <img className="medical-card__icon" src={imageCard} alt="иконка" />
          </div>
          <div className="medical-card__wrapper">
            <h3 className="medical-card__name medical-card__name_info">Информация о пациенте</h3>
            <ul className="medical-card__item-list">
              <li className="medical-card__text medical-card__text_info">Ваши личные данные</li>
              <li className="medical-card__text medical-card__text_info">Рекомендации врачей</li>
              <li className="medical-card__text medical-card__text_info">История болезней</li>
            </ul>
          </div>
        </li>
        <li className="medical-card__item">
          <div className="medical-card__icon-container">
            <img className="medical-card__icon" src={imageLab} alt="иконка" />
          </div>
          <div className="medical-card__wrapper">
            <h3 className="medical-card__name">Результаты анализов</h3>
            <p className="medical-card__text">Вы можете узнать здесь результаты своих анализов</p>
          </div>
        </li>
        <li className="medical-card__item">
          <div className="medical-card__icon-container">
            <img className="medical-card__icon" src={imageAdd} alt="иконка" />
          </div>
          <div className="medical-card__wrapper">
            <h3 className="medical-card__name">Добавить  информацию</h3>
            <p className="medical-card__text">Добавляйте в свою электронную медицинскую карту новые данные</p>
          </div>
        </li>
        <li className="medical-card__item">
          <div className="medical-card__icon-container">
            <img className="medical-card__icon" src={imageHistory} alt="иконка" />
          </div>
          <div className="medical-card__wrapper">
            <h3 className="medical-card__name">История приемов</h3>
            <p className="medical-card__text">Вся информация о полученных услугах за все время хранится здесь</p>
          </div>
        </li>
      </ul>
    </section>
  )
};

export default MedicalCard;
