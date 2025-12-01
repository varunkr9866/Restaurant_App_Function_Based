import React, { COmponent } from "react";
import "./Demo.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <div className="pri">
          <div className="content">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="container">
                <label htmlFor="username">
                  <b>Username</b>
                </label>
                <input type="text" name="username" id="username" required />

                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <input type="password" name="password" id="password" required />

                <button type="submit">Login</button>
              </div>
            </form>
          </div>
          <Copyright />
        </div>
      </div>
    );
  }
  
  handleSubmit(){
    
  }
  componentDidMount(){
    
  }
}

export default Login;
