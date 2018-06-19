import React, { Component } from 'react';
import Metrics from '../../images/metrics.svg';
import Bipbip from '../../images/bipbip_project.svg';
import Climo from '../../images/climo_project.svg';
import Streetrip from '../../images/streetrip_project.svg';
import Ble from '../../images/ble_project.svg';
import Meetpet from '../../images/meetpet_project.svg';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { withRouter, Router, Route, Link as Linkr} from 'react-router-dom';

class Projects extends Component {

  handleOnClick(name) {
    this.props.history.push(name)
  }

  render() {
    return(
      <section className="projects">
        <div className="projects__title">
          <h2 className="projects__header">Proyectos</h2>
          <div className="lines"></div>
        </div>
        <div className="containerimages">
          <Row>
            <Col xs={12} md={12}>
              <div className="overlay__image" onClick={this.handleOnClick.bind(this,"/projects/streetrip")}>
                <img src={Streetrip} alt="" className="projects__image"/>
                <div className="after">
                  <div className="information_project_container">
                    <h1 className="overlay__title">Streetrip</h1>
                    <p className="overlay__paragraph">Desarrollo de plataforma Web y App Móvil</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="overlay__image" onClick={this.handleOnClick.bind(this,"/projects/climo")}>
                <img src={Climo} alt="" className="projects__image"/>
                <div className="after">
                  <div className="information_project_container">
                    <h1>CLIMO</h1>
                    <p>Desarrollo de APP Móvil Android</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="overlay__image" onClick={this.handleOnClick.bind(this,"/projects/ble")}>
                <img src={Ble} alt="" className="projects__image"/>
                <div className="after">
                  This is some content
                </div>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className="overlay__image">
                <img src={Streetrip} alt="" className="projects__image"/>
                <div className="after">
                  This is some content
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="overlay__image">
                <img src={Ble} alt="" className="projects__image"/>
                <div className="after">
                  This is some content
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="overlay__image" onClick={this.handleOnClick.bind(this,"/projects/meetpet")}>
                <img src={Meetpet} alt="" className="projects__image"/>
                <div className="after">
                  This is some content
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    )
  }


}

export default withRouter(Projects);