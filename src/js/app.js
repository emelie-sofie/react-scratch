import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import flamImage from '../assets/Flammarion.jpg';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={ flamImage } alt='The Sun, Moon and Stars' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
