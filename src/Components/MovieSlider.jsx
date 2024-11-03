import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MovieSlider.css';
import Background from '../assets/images/Background.png';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const MovieSlider = () => {
    const sliderRef = useRef(null);

    const movies = [
        { id: 1, title: 'Movie 1', poster: Background },
        { id: 2, title: 'Movie 2', poster: Background },
        { id: 3, title: 'Movie 3', poster: Background },
        { id: 4, title: 'Movie 4', poster: Background },
        { id: 5, title: 'Movie 5', poster: Background },
        { id: 6, title: 'Movie 6', poster: Background },
        { id: 7, title: 'Movie 7', poster: Background },
        { id: 8, title: 'Movie 8', poster: Background },
        { id: 9, title: 'Movie 9', poster: Background },
        { id: 10, title: 'Movie 10', poster: Background },
    ];

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <>
            <div className="movie-slider">
                <Slider ref={sliderRef} {...settings}>
                    {movies.map((movie) => (
                        <div key={movie.id} className="movie-slide">
                            <div className="image-container">
                                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                                <h3 className="titleTxt">{movie.title}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="slider-controls">
                    <button onClick={handlePrev} className="slider-button left"> <FaAngleLeft size={22} /></button>
                    <button onClick={handleNext} className="slider-button right"><FaAngleRight size={22} /></button>
                </div>
            </div>
        </>
    );
};

export default MovieSlider;

