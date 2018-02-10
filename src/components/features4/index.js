import React from 'react';
import './_features4.scss';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
// import '../../../sass/_landing.scss'

const Feature4 = props =>
  (<section className="features4" id="features4">
  <div className="container marketing">

        <hr className="featurette-divider-1" />
       <div className="row featurette">
              <div className="col-md-7">
            <Zoom> <h6 className="featurette-heading">CLIP THE WEB<span className="text-muted"></span></h6>
                <p className="lead">
                  <ul>
                    <li>Automatic screenshot and save links with a click of a button</li>
                    <li>Capture multiple images from a single web page</li>
                    <li>Take clippings or quotes of text from the pages</li>
                  </ul>
                </p>
            </Zoom>
              </div>
              <div className="col-md-5">
              <Rotate>  <img className=" mw-100 featurette-image img-fluid mx-auto" src="https://res.cloudinary.com/cachemunk-inc/image/upload/v1518217039/Plugin_s7g2y9.png" alt="Plugin" /></Rotate>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-5 pull-md-7">
              <Fade left>
                <img className=" mw-100 featurette-image img-fluid mx-auto" src="https://res.cloudinary.com/cachemunk-inc/image/upload/v1518217750/NewletterCachemunk_daqn5a.png" alt="Email Newsletter" />
              </Fade>
              </div>

              <div className="col-md-7 push-md-5">
               <Fade right> <h6 className="featurette-heading"> SHARE VISUALLY <span className="text-muted"></span></h6>
                 <p className="lead">Our newsletter feature makes it easy to package ideas and communicate them more clearly.</p></Fade>
              </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
             <div className="col-md-7">
            <Fade left>
              <h6 className="featurette-heading">STAY ORGANIZED<span className="text-muted"></span></h6>
                <p className="lead">We treat files, links, & notes equally allowing you to keep all your ideas in one place. </p></Fade>
              </div>
              <div className="col-md-5">
                <Fade right><img className=" mw-100 featurette-image img-fluid mx-auto" src="https://res.cloudinary.com/cachemunk-inc/image/upload/v1518219251/Cachemunk_Tile-View_rburrn.png" alt="Tile View" /></Fade>
              </div>
            </div>
            <hr className="featurette-divider" />
      </div>

  </section>);

export default Feature4;
