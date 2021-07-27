import React from 'react';
import { RandomColor } from '../random-color/RandomColor';

export default function App() {
  
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval());
  }
}
