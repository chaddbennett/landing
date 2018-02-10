/* global graphql */

import React from 'react';
import Features from '../components/features';
import Features2 from '../components/features2';
import Features3 from '../components/features3';
import Features4 from '../components/features4';
import Cta from '../components/cta';

const IndexPage = props =>
  (<main>
    <Features data={props.data.allDataJson.edges[0].node.features} />
    {/* <Features2 data={props.data.allDataJson.edges[0].node.features2} /> */}
    {/* <Features3 data={props.data.allDataJson.edges[0].node.features3} /> */}
    <Features4 data={props.data.allDataJson.edges[0].node.features4} />
    <Cta data={props.data.allDataJson.edges[0].node.cta} />
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
        }
      }
    }
  }
`;
