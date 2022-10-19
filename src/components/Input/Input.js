import React from "react";
import styles from "./Input.module.scss";

const Input = () => {
  return (
    <form className={styles.search}>
      <div className={styles.search__block}>
        <button className={styles.search__btn} type="submit"></button>
        <input
          type="text"
          placeholder="Поиск..."
          className={styles.search__input}
        />
        <div className={styles.search__select__wrapper}>
          <select name="" id="" className={styles.search__select}>
            <option selected value="">
              Курсы
            </option>
            <option value="">Тезаурус</option>
          </select>
          <div className={styles.search__select__wrapper__arr}></div>
        </div>
      </div>
    </form>
  );
};

export default Input;
