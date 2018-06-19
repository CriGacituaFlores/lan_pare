import React, { Component } from 'react';
import '../../styles/main.scss';
import TowersPrincipal from '../../images/towers_principal.svg';
import Foto from '../../images/foto.png';

class Principal extends Component {


  render() {
    return(
      <section className="principal">
        <div className="principal__message">
          <h1 className="principal__title">Desarrollamos software</h1>
          <h1 className="principal__title">a la medida de tu empresa</h1>
          <p className="principal__subtitle">Creando soluciones innovadoras</p>
          <button className="principal__button">
            <span className="CONTACTAR">
              Contactar
            </span>
          </button>
        </div>
        <div className="principal__tower">
          <img src={Foto} alt="Logo" className="principal__tower__image"/>
        </div>
      </section>
    )
  }

}

export default Principal;