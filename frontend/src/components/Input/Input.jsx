import React, { useState } from "react";
import styles from "./Input.module.scss";
import { Link } from "react-router-dom";

const Input = ({ courses, Click }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const all = [...courses.firstList, ...courses.secondList];
  const filtered = all.filter((course) => {
    return course.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div
      className={active ? styles.modal__active : styles.modal}
      onClick={() => setActive(false)}
    >
      <form className={styles.search} onClick={(e) => e.stopPropagation()}>
        <div className={styles.search__block}>
          <button
            className={styles.search__btn}
            type="submit"
            disabled
          ></button>
          <input
            type="text"
            placeholder="Поиск..."
            className={styles.search__input}
            onClick={() => {
              setActive(true);
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
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
      <ul className={styles.autocomplete}>
        {value
          ? filtered.map((course) => (
              <li className={styles.autocomplete__item}>
                <Link
                  className={styles.link}
                  to={course.link}
                  onClick={() => Click(course)}
                >
                  {course.name}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Input;
