import "./styles/header.scss";
import search from "./img/icon-search.svg";
import bell from "./img/icon-bell.svg";
import eye from "./img/icon-eye.svg";
import user from "./img/photo-profile.png";
import down from "./img/icon-down.svg";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Мой профиль</h1>
      <div className="header__wrapper">
        <ul className="header__buttons-list">
          <li className="header__item">
            <button className="header__button" type="button">
              <img src={search} alt="кнопка поиска" />
            </button>
          </li>
          <li className="header__item">
            <button className="header__button" type="button">
              <img src={bell} alt="кнопка уведомлений" />
            </button>
          </li>
          <li className="header__item">
            <button className="header__button" type="button">
              <img src={eye} alt="кнопка" />
            </button>
          </li>
        </ul>
        <div className="header__profile">
          <img className="header__user-image" src={user} alt="фото пользователя" />
          <button className="header__profile-more" type="button">
            <img src={down} alt="кнопка" />
          </button>
        </div>
      </div>
    </header>
  )
};

export default Header;
