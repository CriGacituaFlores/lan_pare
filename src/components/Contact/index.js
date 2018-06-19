import React, { Component } from 'react';

class Contact extends Component {


  render() {
    return(
      <section className="contact">
        <div className="contactContainer">
          <div className="contact__message">
            <h2 className="message__title">Tomémonos un Café y hablemos de tu proyecto</h2>
            <p className="message__paragraph">Déjanos tus datos y te contactaremos</p>
          </div>
          <div className="contact__email">
            <input className="contact__input" placeholder="Escribe tú nombre aquí"></input>
            <input className="contact__input" placeholder="Escribe tú Email"></input>
            <button className="contact__button">Enviar</button>
          </div>
        </div>
      </section>
    )
  }

}

export default Contact;