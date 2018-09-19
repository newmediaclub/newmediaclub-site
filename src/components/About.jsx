import React from 'react';
import Clubinfo from './Clubinfo.jsx';
import Clubmedia from './Clubmedia.jsx';

class About extends React.Component {

  render() {
    return (<div className="container">
      <div className="flex flex-align-items-center flex-justify-center about">
        <Clubmedia/>
        <Clubinfo/>
      </div>
    </div>);
  }
}

export default About;
