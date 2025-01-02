import  { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <>
        <button id="btn" onClick={this.toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        {isLoggedIn ? (
          <h1>Hi, welcome user</h1>
        ) : (
          <h1>Please Login</h1>
        )}
      </>
    );
  }
}
