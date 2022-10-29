import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../img/bmstu.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={Logo} alt="" />
        <div className={styles.header__name}>
          <p>МГТУ им. Н.Э Баумана</p>
          <p>Создаем инженеров</p>
        </div>
      </div>
      <div className={styles.header__menu}>
        <Link to="/Thesaurus" className={styles.Thesaurus}>
          Тезаурус
        </Link>
        <p>Рус</p>
        <p>Eng</p>
      </div>
    </div>
  );
};

export default Header;
