import React,{ useState } from "react";
import "/src/components/1.Header/header.css";
function header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icone Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <header className="secao_header">
      <a href="#" className="logo">
        Helthy Food
      </a>
      <nav className="navbar">
        <ul className={active}>
          <li className="nav__item">
            <a href="/">Helthy Recipes</a>
          </li>
          <li className="nav__item">
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Join</a>
          </li>
          <li className="nav__item">
            <a href="/register" className="ativo" id="active">
              Register
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default header;
