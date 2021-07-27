import React, { Component } from 'react';
import ColorDisplay from '../color-picker/ColorDisplay';



class RandomColor extends Component {

state = {
  color: '',
}
  
colorPicker = () => {
  const colors = ['royalblue', 'thistle', 'rosybrown', 'green', 'gray', 'teal'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  this.setState({ color: randomColor });
};

  componentDidMount = () => {
    this.interval = setInterval(() => ({ color: this.colorPicker() }), 1000);
  };
 
  render() {
    const { color } = this.state;
    return (
      <>
        
        <ColorDisplay backgroundColor = { color }/>
      </>
    );
  }
}

export default RandomColor;