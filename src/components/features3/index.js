import React from 'react';
import { Parallax, Background } from 'react-parallax';

import './_features3.scss';
import '../../../sass/_landing.scss'

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const image2 = "https://res.cloudinary.com/cachemunk-inc/image/upload/v1516330572/library_xajsyy.jpg";


const Features3 = props =>
  (<section className="features3" id="features3">
    <Parallax bgImage={image2} strength={-100}>
      <div style={{height: 500}}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
  </section>);

export default Features3;
