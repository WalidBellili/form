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
