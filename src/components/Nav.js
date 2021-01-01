import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to={{ pathname: "./about", state: { fromNav: true } }}>About</Link> */}
      {/* route props에 전달되어진다. 어바웃 페이지 콘솔창에서 props 객체를 바바 */}
    </div>
  );
}

export default Nav;
