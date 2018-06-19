//Libraries imports
import React, { Component } from 'react';

//Local imports
import Header from '.././Header';
import NotFound from './message';
import Footer from '.././Footer';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class NoMatch extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div>
        <Header />
        <Element name="nomatch">
          <NotFound />
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    )
  }
}

export default NoMatch;