import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
    };
  }
  handleEmailChange = (e) => {
    this.setState(
      {
        email: e.target.value,
      },
      () => {}
    );

    // console.log(this.state.email);
    // const emailMatch = e.target.value;
    const emailMatch = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    // if (emailMatch.test(e.target.value)) {
    if (e.target.value.match(emailMatch)) {
      this.setState(
        {
          emailIsValid: true,
        },
        () => {
          console.log(this.state.emailIsValid);
        }
      );
    }
  };
  //
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
    if (e.target.value.length > 5) {
      this.setState(
        {
          passwordIsValid: true,
        },
        () => {
          console.log(this.state.passwordIsValid);
        }
      );
    }
  };
  //
  handleRememberMeChange = (e) => {
    this.setState({
      rememberMe: !this.state.rememberMe,
    });
    // console.log(this.state.rememberMe);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.emailIsValid && this.state.passwordIsValid) {
      this.setState({
        isSubmitted: true,
      });
    }
  };
  handleFirstNameChange = (e) => {
    this.setState(
      {
        firstName: e.target.value,
      },
      () => {
        // console.log(this.state.firstName);
      }
    );
  };
  handleLastNameChange = (e) => {
    this.setState(
      {
        lastName: e.target.value,
      },
      () => {
        // console.log(this.state.lastName);
      }
    );
  };
  render() {
    return (
      <div>
        {!this.state.isSubmitted ? (
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={this.handleEmailChange}
              />
              <label htmlFor="name" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                onChange={this.handleFirstNameChange}
              />
              <label htmlFor="lastname" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                aria-describedby="emailHelp"
                onChange={this.handleLastNameChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={this.handleRememberMeChange}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        ) : (
          <p>
            {this.state.firstName} {this.state.lastName}
          </p>
        )}
      </div>
    );
  }
}

export default App;
