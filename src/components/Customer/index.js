import React, { Component } from 'react';
import '../../styles/main.scss';
import Slider from "react-slick";
import ReactSlider from '../ReactSlider';
import Climo from '../../images/climo.svg';
import Streetrip from '../../images/streetrip.svg';
import Volvo from '../../images/volvo.svg';
import Wenu from '../../images/wenu.svg';
import Metrics from '../../images/metrics.svg';

const images = [Climo, Streetrip, Volvo, Wenu, Climo, Streetrip, Volvo, Wenu];

class Customer extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1550,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <section className="customers">
          <div className="customers__title">
            <h2 className="customers__header">Somos un equipo de ingenieros apasionados por crear soluciones innovadoras</h2>
            <p className="customers__paragraph">Entregamos productos de valor a nuestros clientes</p>
          </div>
        </section>
        <section className="customerslider">
          <div className="customers__slider">
            <ReactSlider settings={settings} images={images} />
          </div>
          <div className="customerstandard">
            <div className="customerstandard__item">
              <h2 className="customerstandard__title">Nos esforzamos por mantener los mejores estándares de calidad,</h2>
              <p className="customerstandard__paragraph">Ya que creemos que el éxito de nuestros clientes es nuestro éxito.</p>
            </div>
            <div className="customerstandard__item">
              <img src={Metrics} alt="metrics" className="customerstandard__image" />
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default Customer;