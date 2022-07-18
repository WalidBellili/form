this.state = {
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false,
  };
}
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

// ******************************************
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

// ***********************
handleRememberMeChange = (e) => {
  this.state({
    rememberMe: !this.state.rememberMe,
  });
};

// jsx
<div>
        <form>
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
      </div>