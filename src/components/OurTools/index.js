import React, {Component} from 'react';
import ReactSlider from '../ReactSlider';
import Amazon from '../../images/amazon.png';
import Kotlin from '../../images/kotlin.png';
import Postgres from '../../images/postgres.png';
import Rails from '../../images/rails.png';
import ReactImage from '../../images/react.png';
import Swift from '../../images/swifft.png';

class OurTools extends Component {

  render() {
    return(
      <section className="ourtool">
        <div className="ourtool__container">
          <div className="middle_element middle_element--small">
            <div className="middle_element__header">
              <p className="header_tools">Herramientas con las que trabajamos</p>
            </div>
            <div className="line_tool"></div>
            <div className="middle_element__content">
              <p className="header_tools_paragraph">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
            </div>
          </div>
          <div className="middle_element middle_element--bigger">
            <div className="images_tools">
              <div className="containerImageTool">
                <div className="images_tools__image">
                  <img src={Rails} className="img_tool"/>
                </div>
                <div className="images_tools__image">
                  <img src={Postgres} className="img_tool"/>
                </div>
              </div>
              <div className="containerImageTool">
                <div className="images_tools__image">
                  <img src={Amazon} className="img_tool"/>
                </div>
                <div className="images_tools__image">
                  <img src={Kotlin} className="img_tool"/>
                </div>
              </div>
              <div className="containerImageTool">
                <div className="images_tools__image">
                  <img src={Swift} className="img_tool"/>
                </div>
                <div className="images_tools__image">
                  <img src={ReactImage} className="img_tool"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
}

export default OurTools;