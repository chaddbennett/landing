import React from 'react';
import Typist from 'react-typist';
import './_features.scss';
import '../../../sass/_landing.scss'
import VideoPopup from '../VideoPopup'

const Hero = props =>
  (<section className="features" id="features">
    <div className="jumbotron">
      <div className="main-slogan"> {"THE SIMPLE WAY"} </div>

      <Typist
        cursor={{ hideWhenDone: true }}>
        <span className="sub-slogan"> { "TO SHARE WHAT YOU KNOW"} </span>
      {/* <Typist.Backspace count={5} delay={1000} />
       <Typist.Delay ms={1250} /> */}
      </Typist>

      <VideoPopup/>
    </div>
  </section>);

export default Hero;
