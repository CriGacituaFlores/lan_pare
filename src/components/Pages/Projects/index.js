import React, { Component } from 'react';

import Header from '../.././Header';
import Projects from '../.././Projects';
import Contact from '../.././Contact';
import Footer from '../.././Footer';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Project extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div>
        <Header />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }

}

export default Project;