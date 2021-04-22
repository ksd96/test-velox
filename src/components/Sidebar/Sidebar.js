import Nav from "../Nav/Nav";
import logo from "./img/logo.png"
import { Link } from 'react-router-dom';
import "./styles/sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <p className="sidebar__logo">Логотип</p>
      <Nav />
      <button className="sidebar__button">Полезно знать</button>
      <div className="sidebar__wrapper">
        <Link to="#" className="sidebar__link">Помощь</Link>
        <Link to="#" className="sidebar__link-developer">
          <img className="sidebar__logo-developer" src={logo} alt="Логотип AppVelox" />
        </Link>
      </div>
    </aside>
  )
};

export default Sidebar;
