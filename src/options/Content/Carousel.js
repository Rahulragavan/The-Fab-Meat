import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import aimg from './img/slida.jpg';
import bimg from './img/slidb.jpg';
import cimg from './img/slidc.jpg';
import dimg from './img/slidd.jpg';
import eimg from './img/slide.jpg';

const Carousel = () => {
    const slideImages = [
        { url: aimg, caption: '' },
        { url: bimg, caption: '' },
        { url: cimg, caption: '' },
        { url: dimg, caption: '' },
        { url: eimg, caption: '' },
    ];

    const SlideShow = ({ slideImages }) => {
        const [divStyle, setDivStyle] = useState({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '600px', // Default height for larger screens
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            position: 'relative',
            overflow: 'hidden', 
        });

      

        // Function to adjust height based on screen width
        const adjustHeight = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 768) {
                setDivStyle(prevStyle => ({
                    ...prevStyle,
                    height: '300px',
                }));
            } else {
                setDivStyle(prevStyle => ({
                    ...prevStyle,
                    height: '600px', // Default height for larger screens
                }));
            }
        };

       
        useEffect(() => {
           
            adjustHeight();

          
            window.addEventListener('resize', adjustHeight);

           
            return () => {
                window.removeEventListener('resize', adjustHeight);
            };
        }, []);

        return (
            <div className='slide-container-slid'>
                <Fade>
                    {slideImages.map((image, index) => (
                        <div key={index} style={{ ...divStyle }}>
                            <img
                                src={image.url}
                                alt={image.caption}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                           
                        </div>
                    ))}
                </Fade>
                <style jsx>{`
                    .slide-container-slid {
                        margin-top: 140px; // Adjust as needed
                    }
                    @media (max-width: 768px) {
                        .slide-container-slid {
                            margin-top: 140px; // Remove or adjust to fit your layout
                        }
                    }
                `}</style>
            </div>
        );
    };

    return (
        <div className="carousel-container">
            <SlideShow slideImages={slideImages} />
        </div>
    );
};

export default Carousel;
