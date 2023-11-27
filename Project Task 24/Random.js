import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

class Random extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.generateRandomColor()
    };

     // Bind the handleClick method
  this.handleClick = this.handleClick.bind(this);
  }

 

  generateRandomColor() {
    return [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ];
  }

  handleClick() {
    this.setState({
      color: this.generateRandomColor()
    });
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {

    const backgroundColor = `rgb(${this.state.color[0]}, ${this.state.color[1]}, ${this.state.color[2]})`;
    return (
      <div style={{ backgroundColor }}>
        <h1 className={this.isLight() ? 'white' : 'black'}>
        <h1> {this.formatColor(this.state.color)}</h1>
        <Button onClick={this.handleClick} label="Pick a new color" light={this.isLight()} />
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);