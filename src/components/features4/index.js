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
            <Zoom>   <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p></Zoom>
              </div>
              <div className="col-md-5">
              <Rotate>  <img className=" mw-100 featurette-image img-fluid mx-auto" src="https://source.unsplash.com/random/500x500" alt="Generic placeholder image" /></Rotate>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-5 pull-md-7">
              <Fade left>  <img className=" mw-100 featurette-image img-fluid mx-auto" src="https://source.unsplash.com/random/500x500" alt="Generic placeholder image" /></Fade>
              </div>

              <div className="col-md-7 push-md-5">
            <Fade
              right>   <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p></Fade>
              </div>
            </div>


            <hr className="featurette-divider" />
            <div className="row featurette">
             <div className="col-md-7">
          <Fade left>  <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p></Fade>
              </div>
              <div className="col-md-5">
                <Fade right><img className=" mw-100 featurette-image img-fluid mx-auto" src="https://source.unsplash.com/random/500x500" alt="Generic placeholder image" /></Fade>
              </div>
            </div>
            <hr className="featurette-divider" />
      </div>

  </section>);

export default Feature4;
