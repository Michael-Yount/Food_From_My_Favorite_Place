import React, { Component } from 'react';

class BackgroundVideo extends Component {
  render() {
    return (
      <video autoPlay loop muted>
        <source src="video.mp4" type="video/mp4" />
      </video>
    );
  }
}

export default BackgroundVideo;