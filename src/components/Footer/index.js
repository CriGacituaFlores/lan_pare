import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import AbstractLogo from '../../images/abstract_logo.svg';

class Footer extends Component {

  render() {
    return(
      <section className="footer">
        <div className="footer__header">
          <div className="footerblock">
            <img src={AbstractLogo} alt="Logo" className="header__logo"/>
            <ul className="header__menu">
              <li className="header__menu-item">Inicio</li>
              <li className="header__menu-item">Servicio</li>
              <li className="header__menu-item">Proyectos</li>
              <li className="header__menu-item">Equipo</li>
              <li className="header__menu-item">Clientes</li>
              <li className="header__menu-item">Contacto</li>
            </ul>
          </div>
        </div>
        <div className="footer__content">
          <div className="footercontentblock">
            <p className="paragraph__footer">Dirección: Aurelio González 3779 - Vitacura, Santiago, Chile</p>
            <p className="paragraph__footer">Contacto Email: contacto@abstract.cl</p>
          </div>
          <div className="footercontentblock footercontentblock--float-right">
            <FontAwesome name='linkedin' className="fontawesome__icon"/>
            <FontAwesome name='instagram' className="fontawesome__icon"/>
          </div>
        </div>
      </section>
    )
  }

}

export default Footer;