import React from 'react';
import './signIn.css';
import FooterComp from '../../Components/Footer/FooterComp';

const SignIn = () => {
  return (
    <>
      <div className="signin-container">
        <div className="background">
          <div className="overlay">
            <form className="signin-form">
              <h1>Sign In</h1>
              <input
                type="email"
                placeholder="Email or mobile number"
                className="input-field"
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <button className="signin-button"><a href="/profile"> Sign In</a></button>
              <div className="options">
                <button className="sign-in-code">Use a Sign-In Code</button>
                <a href="/" className="forgot-password">Forgot password?</a>
              </div>
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="signup">
                New to Netflix? <a href="/signup">Sign up now.</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterComp txtInp={false} />
    </>
  );
}
export default SignIn
