import React, { Component } from 'react';
import '../../styles/main.scss';
import AbstractLogo from '../../images/abstract_logo.svg';
import { slide as Menu } from 'react-burger-menu';

import { Router, Route, Link as Linkr} from 'react-router-dom';
import { Link } from 'react-scroll'

class Header extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <nav className="navigation">
          <div className="headroom">
            <header className="header">
              <Linkr to="/index">
                <img src={AbstractLogo} alt="Logo" className="header__logo"/>
              </Linkr>
              <button className="hamburger hamburger--spin navigation__toggle header__burger">
                <span className="hamburger-box">
                  <span className="hamburguer-inner"></span>
                </span>
              </button>
              <ul className="header__menu">
                <li className="header__menu-item"><Link activeClass="active" to="index" spy={true} smooth={true} duration={700}>Inicio</Link></li>
                <li className="header__menu-item"><Link activeClass="active" to="customers" spy={true} smooth={true} duration={700}>Clientes</Link></li>
                <li className="header__menu-item"><Link activeClass="active" to="services" spy={true} smooth={true} duration={700}>Servicio</Link></li>
                <li className="header__menu-item"><Linkr to="/projects" className="redirect_link">Proyectos</Linkr></li>
                <li className="header__menu-item"><Link activeClass="active" to="test1" spy={true} smooth={true} duration={700}>Equipo</Link></li>
                <li className="header__menu-item"><Link activeClass="active" to="contact" spy={true} smooth={true} duration={700}>Contacto</Link></li>
              </ul>
            </header>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;