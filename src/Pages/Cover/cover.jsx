import React from 'react';
import './cover.css';
import Background from '../../assets/images/Background.png'
import Logo from '../../assets/images/Logo.png'
import MovieSlider from '../../Components/MovieSlider'
import CardComp from '../../Components/CardComp';
import AccordionExpandIcon from '../../Components/Accordion';
import FooterComp from '../../Components/FooterComp';

const Cover = () => {

    const cardData = [
        {
            id: 1,
            heading: "Enjoy on your TV",
            subHeading: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            src: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        },
        {
            id: 2,
            heading: "Download your shows to watch offline",
            subHeading: "Save your favorites easily and always have something to watch.",
            src: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        },
        {
            id: 3,
            heading: "Watch everywhere",
            subHeading: " Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            src: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        },
        {
            id: 4,
            heading: "Create profiles for kids",
            subHeading: "Send kids on adventures with their favorite characters in a space made just for them free with your membership.",
            src: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        },
    ]
    return (
        <>
            <div>
                <div>
                    {/* Background Image */}
                    <div
                        className="background"
                        style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh',
                            width: '100vw',
                            position: 'relative',
                            opacity: 0.3,
                        }}
                    />

                    {/* Content on top of background */}
                    <div
                        className="content"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '20px',
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ height: '70px', width: '150px' }}
                        />
                        <button className="signIn">Sign In</button>
                    </div>

                    {/* Central text and input section */}
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
                            marginBottom: '600px'
                        }}
                    >
                        <p className="tvText">Unlimited movies, TV shows, and more</p>
                        <p className="starts">Starts at Rs 250. Cancels anytime</p>
                        <p className="enterEmail">
                            Ready to watch? Enter your Email to create or restart your membership.
                        </p>
                        <div className="btnNInput">
                            <input
                                type="email"
                                className="emailInput"
                                placeholder="Email address"
                                required
                            />
                            <button className="getStarted">Get Started {`>`}</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='movieMain'>
                <p className='trending'>Trending Now</p>
                <MovieSlider />
            </div>
            <div>
                <h1 style={{ color: "white", fontSize: 35, marginLeft: "110px", fontFamily: "sans-serif" }}>More Reasons to Join</h1>
                <div style={{
                    marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '10%',
                }}>

                    {cardData.map((card) => (
                        <CardComp
                            key={card.id}
                            heading={card.heading}
                            subText={card.subHeading}
                            src={card.src}
                        />
                    ))}
                </div>
            </div>
            <div style={{ marginTop: 10, marginLeft: '5.5%', marginRight: '6%', }}>
                <h1 style={{ color: "white", fontSize: 35, fontFamily: "sans-serif" }}>Frequently Asked Questions</h1>
                <AccordionExpandIcon />
            </div>

            <div style={{ marginTop: 10 }}>
                <FooterComp />
            </div>

        </>
    );
}
export default Cover
