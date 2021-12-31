import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.PreventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            label="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            required
          />
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
