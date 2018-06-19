import React, { Component } from 'react';
import Slider from "react-slick";

class SliderComponent extends Component {

  
  render(){
    return(
      <Slider {...this.props.settings}>
        {this.props.images.map((image, index) => {
          return(
            <div key={index}>
              <img src={image}/>
            </div>
          )
        })}
      </Slider>
    )
  }

}

export default SliderComponent;