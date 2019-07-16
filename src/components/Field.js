import React from 'react';
import '../css/field.css';
import bases from '../img/on_first.png';


class Field extends React.Component {

  state = {
    first: false,
    second: false,
    third: false,
  }


  render() {
    return (
      <section id="field">
        <img className="bases" src={bases} />
      </section>
    )
  }
}

export default Field;
