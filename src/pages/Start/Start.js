import React from "react";
import "./Start.scss";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";

const Start = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper-content">
        <div className="container">
          <h1>База и Генератор Образовательных Ресурсов</h1>
          <Input />
          <div className="transition">
            <span>Перейти ко всем учебным курсам</span>
            <div className="transition__arr"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
