import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <h4>Контакты:</h4>
        <div className={styles.links}>
          <div className={styles.adres}> </div>
          <span>Москва, 2-я Бауманская ул., д. 5</span>
        </div>
        <div className={styles.links}>
          <div className={styles.number}> </div>
          <span>+7 (499) 263 6840</span>
        </div>
        <div className={styles.links}>
          <div className={styles.mail}> </div>
          <span>rk6@bmstu.ru</span>
        </div>
        <div className={styles.links}>
          <div className={styles.Vk}> </div>
          <span>Мы ВКонтакте</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
