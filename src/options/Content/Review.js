import React, { useState, useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { FaStar } from "react-icons/fa6";
import "./Keypoints.css";

const Carousel = () => {
    const slideImages = [
        {
            name: 'Ravi',
            caption: 'Fantastic quality and great selection! The staff is knowledgeable and friendly, making every visit a pleasant experience. Highly recommend their fresh steaks and marinated chicken.'
        },
        {
            name: 'Jothi.P',
            caption: 'The best meat shop in town! Their cuts are always fresh, and the prices are reasonable. I love their homemade sausages and the customer service is top-notch.'
        },
        {
            name: 'Priyanka.V',
            caption: 'Excellent variety and superb quality. The butchers are skilled and always willing to give cooking tips. Highly recommend their fresh steaks and marinated chicken.'
        },
        {
            name: 'Kalai.M',
            caption: 'This place never disappoints. The meats are always fresh and flavorful. The staff goes above and beyond to ensure you get exactly what you need. A real gem!'
        },
        {
            name: 'Kavi',
            caption: 'High-quality meats and a welcoming atmosphere. Their organic and locally sourced options are a big plus. Highly recommend their fresh steaks and marinated chicken.'
        },
    ];

    const baseDivStyle = {
        backgroundColor: 'rgb(232, 232, 232)',
        width: '100%',
        textAlign: 'center',
        paddingLeft: '400px',
        paddingRight: '400px',
        paddingTop: '40px',
    };

    const getResponsiveStyle = () => {
        if (window.innerWidth <= 1000) {
            return {
                ...baseDivStyle,
                paddingLeft: '30px',
                paddingRight: '30px',
            };
        }
        return baseDivStyle;
    };

    const [divStyle, setDivStyle] = useState(getResponsiveStyle());

    useEffect(() => {
        const handleResize = () => {
            setDivStyle(getResponsiveStyle());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const spanStyle = {
        background: 'rgb(232, 232, 232)',
        color: 'rgb(100, 100, 100)',
        width: '100%',
        height: '300px',
        fontSize: '14px',
    };

    const heading = {
        fontSize: "25px",
        fontWeight: '700',
        color:'black',
    };

    const slidname = {
        color: 'black',
        fontWeight: '700',
        fontSize: '16px',
    };

    const customer = {
        background: 'rgb(232, 232, 232)',
        color: 'rgb(100, 100, 100)',
        width: '100%',
        height: '300px',
        fontSize: '12px',
    };

    return (
        <div className='slide-container'>
            <Slide>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={divStyle}>
                            <span style={heading}>WHAT THEY'RE SAYING</span>
                            <br />
                            <br />
                            <span><FaStar size={20} className='icon-color' /><FaStar size={20} className='icon-color' /><FaStar size={20} className='icon-color'/><FaStar size={20} className='icon-color'/><FaStar size={20} className='icon-color'/></span>
                            <br />
                            <br />
                            <span style={spanStyle}>{image.caption}</span>
                            <br />
                            <br />
                            <span style={slidname}>{image.name}</span>
                            <br />
                            <span style={customer}>customer</span>
                            <br />
                            <br />
                        
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Carousel;
