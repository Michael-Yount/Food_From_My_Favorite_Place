import React from 'react';
import video from '../public/bgVideo2.mp4';

function BackgroundVideo () {
 
    return (
      <div className="bgContainer">
        <div className="overlay">

      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

        </div>
      </div>
    );
  }


export default BackgroundVideo;