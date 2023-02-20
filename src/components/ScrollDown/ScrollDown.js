import React from "react";
import { useEffect } from "react";
import "./ScrollDown.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollDown = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="scroll" data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out">
                <a href="#about">Scroll Down</a>
                <svg fill="#FDFDFE" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M224 402.7V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V402.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7z"></path></svg>
            </div>
        </>
    );
};

export default ScrollDown;
