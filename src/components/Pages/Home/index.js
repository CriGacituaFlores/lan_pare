//Libraries imports
import React, { Component } from 'react';

//Local imports
import Header from '../.././Header';
import Principal from '../.././Principal';
import Customer from '../.././Customer';
import OurService from '../.././OurServices';
import Projects from '../.././Projects';
import OurTools from '../.././OurTools';
import Contact from '../.././Contact';
import Footer from '../.././Footer';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div>
        <Header />
        <Element name="index" className="element">
          <Principal />
        </Element>
        <Element name="customers" className="element">
          <Customer />
        </Element>
        <Element name="services">
          <OurService />
        </Element>
        <Element name="tools">
          <OurTools />
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

export default Home;