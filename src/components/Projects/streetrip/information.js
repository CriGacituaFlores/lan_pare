import React, { Component } from 'react';

import StreetripLogo from '../../../images/streetrip_logo.png';
import StreetripIphone from '../../../images/streetrip_iphone.jpg';
import Rails from '../../../images/rails.png';
import Postgres from '../../../images/postgres.png';
import Amazon from '../../../images/amazon.png';
import Kotlin from '../../../images/kotlin.png';
import { withRouter } from 'react-router-dom';

class StreetripInformation extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.push("/projects")
  }

  render() {
    return(
      <section className="streetripInformation">
        <div className="streetrip_back">
          <button className="button_back" onClick={this.goBack}>
            <span className="fa fa-arrow-left"></span>
            Volver
          </button>
        </div>
        <div className="streetrip_description">
          <div className="streetrip_image">
            <img src={StreetripIphone} />
          </div>
          <div className="streetrip_definition">
            <img src={StreetripLogo}/>
            <h1 className="streetrip_title">Aplicación móvil/Web</h1>
            <div className="streetrip_line"></div>
            <p className="streetrip_paragraph">
              Esta App Soluciona el tema de las rendiciones de viajes y visitas realizados 
              con vehículos particulares de los empleados.
            </p>

            <p className="streetrip_paragraph">
              Esta plataforma entrega herramientas a las empresas, mediante las cuales las 
              organizaciones podrán llevar un registro y control de estos.
            </p>
          </div>
        </div>
        <div className="streetrip_requirements">
          <div className="streetrip_requirements__content">
            <h1>REQUERIMIENTOS DEL CLIENTE</h1>
            <div className="streetrip_line"></div>
            <p>
              Desktop computers are stationary by nature. Unlike a notebook computer, 
              which can easily be moved from room to room, they are less likely to be 
              dropped or broken because they are not moved as often.
            </p>
          </div>
        </div>
        <div className="streetrip_tools">
          <div className="streetrip_tools__header">
            <h1>Herramientas que Implementamos, <small>Cómo lo hicimos.</small></h1>
            <div className="streetrip_line"></div>
            <div className="streetip_tools__content">
              <div className="streetrip_check">
                <i className="fa fa-check-circle-o icon_check"></i>
                <p>If you are in the market for a computer, there are a number of factors to consider.</p>
              </div>
              <div className="streetrip_check">
                <i className="fa fa-check-circle-o icon_check"></i>
                <p>Desktop computers are stationary by nature. Unlike a notebook computer, which can easily be moved from room to room, 
                  they are less likely to be dropped or broken because they are not moved as often.</p>
              </div>
              <div className="streetrip_check">
                <i className="fa fa-check-circle-o icon_check"></i>
                <p>The vents on desktop computers are located on the back of the tower, which allows for proper ventilation that 
                  will help to prevent the computer from overheating.</p>
              </div>
            </div>
            <div className="streetrip_tools__images">
              <img src={Rails} />
              <img src={Postgres} />
              <img src={Amazon} />
              <img src={Kotlin} />
            </div>
          </div>
          <div className="streetrip_tools__result">
            <div className="streetrip_result_container">
              <h1>Resultados</h1>
              <div className="streetrip_line"></div>
              <div className="streetrip_result_container__content">
                <div className="streetrip_check">
                  <i className="fa fa-check-circle-o icon_check icon_check--white"></i>
                  <p>Desktop computers are stationary by nature. Unlike a notebook computer, which can easily be moved from room to room.</p>
                </div>
                <div className="streetrip_check">
                  <i className="fa fa-check-circle-o icon_check icon_check--white"></i>
                  <p>Desktop computers are stationary by nature. Unlike a notebook computer, which can easily be moved from room to room.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default withRouter(StreetripInformation);