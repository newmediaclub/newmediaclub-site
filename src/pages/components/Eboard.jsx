import React from 'react';
import Image from './Image.jsx';
import data from '../../assets/data.json';

class Eboard extends React.Component {

  createImage = (image) => {
    return <Image source={image} key={image}/>;
  };

  createImages = (images) => {
    return images.map(this.createImage);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">

            {this.createImages(data.faces)}

          </div>
        </div>
      </div>
    );
  }
}

export default Eboard;
