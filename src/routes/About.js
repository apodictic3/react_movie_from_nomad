import React from "react";
import "./About.css";
// 저 props가 react-router-dom에서 Route 컴포넌트가 그려줄 컴포넌트에 전달한 Props
function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        'Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.'
      </span>
      <span>- George Orwell, 1984</span>
    </div>
  );
}

export default About;
