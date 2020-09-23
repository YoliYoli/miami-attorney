import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from './lightbox';

const Headshots = () => (
  <StaticQuery
    query={graphql`
      query {
        headshotImages: allFile(filter: {sourceInstanceName: { eq: "images/headshots" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth:2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox headshotImages={data.headshotImages.edges} />}
  />
);
export default Headshots;