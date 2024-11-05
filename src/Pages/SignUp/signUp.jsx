import React from 'react';
import './signUp.css';
import FooterComp from '../../Components/Footer/FooterComp';

const SignUp = () => {
    return (
        <>
            <div className="signin-container">
                <div className="background">
                    <div className="overlay">
                        <form className="signin-form">
                            <h1>Sign Up</h1>
                            <input
                                type="email"
                                placeholder="Email or mobile number"
                                className="input-field"
                            />
                            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                                <input
                                    type="email"
                                    placeholder="First Name"
                                    className="input-field"
                                    style={{ width: '40%' }}
                                />
                                <input
                                    type="email"
                                    placeholder="Last Name"
                                    className="input-field"
                                    style={{ width: '40%' }}
                                />
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-field"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input-field"
                            />
                            <button className="signin-button">Sign Up</button>
                            <div className="signup">
                                Already have an account? <a href="/signin">Sign In</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FooterComp txtInp={false} />
        </>
    );
}
export default SignUp
