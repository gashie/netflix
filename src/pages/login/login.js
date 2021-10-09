import "./login.scss";
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b><Link to="/register">Sign up now.</Link></b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
