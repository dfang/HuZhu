// Accordion based on react-collapsible

import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class Accordion extends Component {

  constructor(){
    super();
  }

  render() {
    let elements = this.props.elements
    return (
        <ul>
        {
            elements.map( (element, index) => (
                <Collapsible openedClassName="open" trigger={element.trigger} key={index}>
                    {element.content}
                </Collapsible>
            ))
        }
        </ul>
      );
    }
}

export default Accordion;
