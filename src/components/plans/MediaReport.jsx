import React, { Component } from 'react';

import './media-report.css'

class MediaReport extends Component {

  render() {
    return (
        <div className="media-report">
          <h1>媒体报道</h1>
          <div className="report-img">
            <a className="report-xinlang" href="#"></a>
            <a className="report-two" href="#"></a>
            <a className="report-sohu" href="#"></a>
            <a className="report-ifeng" href="#"></a>
          </div>
        </div>
      );
    }
}

export default MediaReport;
