import "./App.scss";
import React from "react";
import Start from "./pages/Start/Start";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Thesaurus from "./pages/Thesaurus/Thesaurus";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Thesaurus" element={<Thesaurus />} />
        </Routes>
      </Router>



      <div id="page_header" className="wrapper">
          <div className="name_block">
              <h2>Все учебные курсы:</h2>
              <div className="row">
                  <div className="col-1">
                      <div className="name">> Основы САПР</div>
                      <div className="name">> Телекоммуникационные технологии</div>
                      <div className="name">> Автоматизация проектирования в радиоэлектрони</div>
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
}

export default App;
