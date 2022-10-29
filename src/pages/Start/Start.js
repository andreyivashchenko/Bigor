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
      <div id="page_header" className="body_wrapper">
        <div className="name_block">
          <h2>Все учебные курсы:</h2>
          <div className="row">
            <div className="col-1">
              <div className="name">> Основы САПР</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">
                > Автоматизация проектирования в радиоэлектрони
              </div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
            </div>
            <div className="col-1">
              <div className="name">> Схемотехника</div>
              <div className="name">> Моделирование в ПМК ПА9</div>
              <div className="name">> Моделирование в ПМК ПА9</div>
              <div className="name">> Моделирование в ПМК ПА9</div>
              <div className="name">> Моделирование в ПМК ПА9</div>
              <div className="name">> Моделирование в ПМК ПА9</div>
              <div className="name">> Моделирование в ПМК ПА9</div>
              <div className="name">> Моделирование в ПМК ПА9</div>
              <div className="name">> Моделирование в ПМК ПА9</div>
              <div className="name">> Моделирование в ПМК ПА9</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
              <div className="name">> Телекоммуникационные технологии</div>
            </div>
          </div>
        </div>

        <footer>
          <h4>Контакты:</h4>
          <div className="links">
            <div className="adres"> </div>
            <span>Москва, 2-я Бауманская ул., д. 5</span>
          </div>
          <div className="links">
            <div className="number"> </div>
            <span>+7 (499) 263 6840</span>
          </div>
          <div className="links">
            <div className="mail"> </div>
            <span>rk6@bmstu.ru</span>
          </div>
          <div className="links">
            <div className="Vk"> </div>
            <span>Мы ВКонтакте</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Start;
