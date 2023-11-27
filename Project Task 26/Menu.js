import React from 'react';

export class Menu extends React.Component {
// Constructor to bind handleClick
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

// New function to handle click events
handleClick(e) {
  // Extract the value from the clicked radio button
  const text = e.target.value;
  // Call the chooseVideo function with the extracted value
  this.props.chooseVideo(text);
}
   
  render() {
    return (
      <form>
         <input type="radio" name="src" value="fast" onClick={this.handleClick} /> fast
        <input type="radio" name="src" value="slow" onClick={this.handleClick} /> slow
        <input type="radio" name="src" value="cute" onClick={this.handleClick} /> cute
        <input type="radio" name="src" value="eek" onClick={this.handleClick} /> eek
      </form>
    );
  }
}