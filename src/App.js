import "./styles/App.scss";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">
          <img src={require("./img/bmstu.png")} alt="" />
          <div className={"header__name"}>
            <p>МГТУ им. Н.Э Баумана</p>
            <p>Создаем инженеров</p>
          </div>
        </div>
        <div className="header__menu">
          <p>Тезаурус</p>
          <p>Рус</p>
          <p>Eng</p>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <h1>База и генератор образовательных ресурсов</h1>
          <div className="search">
            <div className="search__icon"></div>
            <div className="search__vert"></div>
            <div className="search__arr"></div>
            <span className="search__menu">Курсы</span>
            <input
              className="search__input"
              type="text"
              placeholder="Поиск..."
            />
          </div>
          <div className="transition">
            <span>Перейти ко всем учебным курсам</span>
            <div className="transition__arr"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
