import React from 'react';
import './signIn.css';
import Background from '../../assets/images/Background.png'
import Logo from '../../assets/images/Logo.png'
import FooterComp from '../../Components/Footer/FooterComp';

const SignIn = () => {
    return (
        // <>
        //     <div>
        //         <div>
        //             {/* Background Image */}
        //             <div
        //                 className="background"
        //                 style={{
        //                     backgroundImage: `url(${Background})`,
        //                     backgroundSize: 'cover',
        //                     backgroundPosition: 'center',
        //                     height: '100vh',
        //                     width: '100vw',
        //                     position: 'relative',
        //                     opacity: 0.3,
        //                 }}
        //             />

        //             {/* Content on top of background */}
        //             <div
        //                 className="content"
        //                 style={{
        //                     position: 'absolute',
        //                     top: 0,
        //                     left: 0,
        //                     right: 0,
        //                     display: 'flex',
        //                     justifyContent: 'space-between',
        //                     alignItems: 'center',
        //                     padding: '20px',
        //                 }}
        //             >
        //                 <img
        //                     src={Logo}
        //                     alt="Logo"
        //                     style={{ height: '70px', width: '150px' }}
        //                 />
        //             </div>

        //         </div>

        //     </div>
        //     <div style={{ marginTop: 10 }}>
        //         <FooterComp txtInp={false}/>
        //     </div>
        // </>

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
              <button className="signin-button">Sign In</button>
              <div className="options">
                <button className="sign-in-code">Use a Sign-In Code</button>
                <a href="/" className="forgot-password">Forgot password?</a>
              </div>
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="signup">
                New to Netflix? <a href="/">Sign up now.</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
export default SignIn
