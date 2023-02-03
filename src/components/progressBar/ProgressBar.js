import React, { useEffect, useState } from 'react';
import './ProgressBar.css';



const ProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {

            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });
    return (
        <>
            <div id="progressBarContainer">
                <div id="progressBar" className="rounded-full" style={{ transform: `scale(${scroll}, 1)`}} />
            </div>
        </>
    )
}

export default ProgressBar;