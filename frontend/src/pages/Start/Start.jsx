import React, { useEffect, useState } from "react";
import "./Start.scss";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";

const Click = async (arg) => {
  const data = qs.stringify(arg);
  await axios.post("http://localhost:5000/Courses", data).then((res) => {
    console.log(res.data);
  });
};

const Start = () => {
  const [courses, setCourses] = useState({
    firstList: [],
    secondList: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((res) => {
        setCourses(res);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="wrapper__home">
        <Header />
        <div className="wrapper__home__container">
          <h1>База и Генератор Образовательных Ресурсов</h1>
          <Input courses={courses} Click={Click} />
          <div className="transition">
            <span>Перейти ко всем учебным курсам</span>
            <a href="#courses" className="transition__arr"></a>
          </div>
        </div>
      </div>
      <div id="courses" className="wrapper__courses">
        <div className="wrapper__courses__container">
          <h2 className="courses__title">Все учебные курсы:</h2>
          <div className="courses__row">
            <div className="courses__col">
              {courses.firstList.map((course) => (
                <Link
                  onClick={() => Click(course)}
                  to={course.link}
                  key={course.id}
                  className="courses__item"
                >
                  {course.name}
                </Link>
              ))}
            </div>
            <div className="courses__col">
              {courses.secondList.map((course) => (
                <Link
                  onClick={() => Click(course)}
                  to={course.link}
                  key={course.id}
                  className="courses__item"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Start;
