import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default class Lightbox extends Component {
  static propTypes = {
    headshotImages: PropTypes.array.isRequired,
  }

  render() {
    const { headshotImages } = this.props;
    return (
      <div>
        {headshotImages.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </div>
    );
  }
}
