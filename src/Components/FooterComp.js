import "./FooterComp.css";

const FooterComp = () => {
  return (
    <>
    <div className="footerheader">
        <div
                        className="central-content"
                        style={{
                            position: 'absolute',
                            top: '40%',
                            left: 0,
                            right: 0,
                            textAlign: 'center',
                            color: 'white',
                            zIndex: 1,
                        }}
                    >
                        <p className="enterEmail">
                            Ready to watch? Enter your Email to create or restart your membership.
                        </p>
                        <div className="btnNInput">
                            <input
                                type="email"
                                className="emailInput"
                                placeholder="Email address"
                            />
                            <button className="getStarted">Get Started {`>`}</button>
                        </div>
                    </div>

    </div>
    < div className="footerheading">
    <h1>Questions?Contact us</h1>
    </div>

    <div className="footer"  style={{backgroundColor:'black'}}>
        <div className="container">
            <div className="row">
<div className="footercol1">
    <a  href="/">FAQ</a>
    <a  href="/">Invester Relation</a>
    <a  href="/">Privacy</a>
    <a  href="/">Speed Test</a>
</div>
<div className="footercol2">
   <a  href="/">Help Center</a>
    <a  href="/">Jobs</a>
    <a  href="/">Legal Notices</a>
    <a  href="/">Cookies Preferences</a>

    
</div>
<div className="footercol3">
    <a  href="/">Account</a>
    <a  href="/">Ways to Watch</a>
    <a  href="/">Corporate Information</a>
    <a  href="/">Only on Netflix</a>
    
</div>
<div className="footercol4">
<a  href="/">Terms of Use</a>
    <a  href="/">Media Center</a>
    <a  href="/">Contact Us</a>
</div>
            </div>
        </div>

    </div>
  
    </>
  );
};

export default FooterComp;
