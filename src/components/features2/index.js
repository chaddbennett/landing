import React from 'react';

import './_features2.scss';
import '../../../sass/_landing.scss'

const NewsListing = props =>
  (<section className="features2" id="features2">
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
        <div className="callout">
          <i className="fa fa-users" aria-hidden="true"></i>
          <h2>TEAMS</h2>
          <p>Built from the ground up with both the individual and the team in mind. Our feature set provides a seamless experience for each use case allowing your personal discoveries to easily extend to the group and vice versa. </p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
        <div className="callout">
          <i className="fa fa-eye" aria-hidden="true"></i>
          <h2>SHARE VISUALLY</h2>
          <p>Communicate your ideas more clearly. We make it easy to leverage work you have already done and make it presentable with minimal effort. This allows you to share cohesive ideas without writing huge blocks of text.</p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
        <div className="callout">
          <i className="fa fa-lock" aria-hidden="true"></i>
          <h2>PRIVATE</h2>
          <p>Privacy is a top priority for us and we don’t believe that knowledge sharing should come at the expense or inconvenience of "public first" systems. </p>
        </div>
      </div>
      </div>
  </div>
  </section>);

export default NewsListing;
