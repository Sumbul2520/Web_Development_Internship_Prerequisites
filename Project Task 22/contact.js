import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: true
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );

  // Declare a new variable named contactInfo
  const contactInfo = (
    // Move the <ul> element here
    <ul>
      <li>client@example.com</li>
      <li>555.555.5555</li>
    </ul>
  );

    return (
      <div id="authorization">
        <h1>Contact</h1>
        <h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
      {this.state.authorized ? (
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      ):(
        <form onSubmit={this.authorize}>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
      )}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);