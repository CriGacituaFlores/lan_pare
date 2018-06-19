import React, { Component } from 'react';

class OurServices extends Component {

  render() {
    return(
      <section className="ourservice">
        <div className="ourservice__item">
          <h2 className="ourservice__title">Nuestros servicios</h2>
          <div className="lines"></div>
        </div>
        <div className="ourservicelist">
          <div>
            <div className="ourservicelist__item">
              <div className="cardService">
                <h3 className="cardService__title">
                  DESARROLLO WEB
                </h3>
                <div className="line"></div>
                <p className="cardService__paragraph">
                  Desarrollamos plataformas web para poder acceder desde cualquier lugar del mundo. 
                  Nuestros proyectos web funcionan en celulares, tablets y computadores
                </p>
                <div className="ourservicelist__button">
                  <button className="buttonservice">
                    Leer más
                  </button>
                </div>
              </div>
              <div className="cardService">
                <h3 className="cardService__title">
                  DESARROLLO MÓVIL
                </h3>
                <div className="line"></div>
                <p className="cardService__paragraph">
                  Desarrollamos aplicaciones móviles para iOS y Android. 
                  Buscamos dar la mejor experiencia de usuario en celulares y tablets.
                </p>
                <div className="ourservicelist__button">
                  <button className="buttonservice">
                    Leer más
                  </button>
                </div>
              </div>
              <div className="cardService">
                <h3 className="cardService__title">
                  DISEÑO UX
                </h3>
                <div className="line"></div>
                <p className="cardService__paragraph">
                  Nuestras aplicacion no sólo funcionan bien, también son agradables de ver y de usar.
                </p>
                <div className="ourservicelist__button">
                  <button className="buttonservice">
                    Leer más
                  </button>
                </div>
              </div>
              <div className="cardService">
                <h3 className="cardService__title">
                  SOFTWARE PERSONALIZADO
                </h3>
                <div className="line"></div>
                <p className="cardService__paragraph">
                  Nos enfocamos en entender el negocio de nuestros clientes, 
                  para entregar soluciones a la medida de sus necesidades.
                </p>
                <div className="ourservicelist__button">
                  <button className="buttonservice">
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default OurServices;