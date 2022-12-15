import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Courses.scss";

const Courses = () => {
  const [content, setContent] = useState({
    mainTitle: "",
    table_of_contents: [],
    text: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/Courses")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setContent(res);
      });
  }, []);

  return (
    <div className="wrapper1">
      <Header />
      <div className="split">
        <div className="split__left">
          {content.table_of_contents.map((obj) => {
            return (
              <div key={obj.title} className="title">
                <h4>{obj.title}</h4>
                {obj.content.map((chapter) => (
                  <div className="title__content">{chapter}</div>
                ))}
              </div>
            );
          })}
        </div>
        <div className="split__right">
          <div className="centered2">
            <h1>{content.mainTitle}</h1>
            <span>{content.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
