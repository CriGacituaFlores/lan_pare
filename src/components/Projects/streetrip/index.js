//Libraries imports
import React, { Component } from 'react';

//Local imports
import Header from '../.././Header';
import StreetripInformation from './information';
import Projects from '../.././Projects';
import Contact from '../.././Contact';
import Footer from '../.././Footer';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Streetrip extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div>
        <Header />
        <Element name="information">
          <StreetripInformation />
        </Element>
        <Element name="project">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    )
  }
}

export default Streetrip;