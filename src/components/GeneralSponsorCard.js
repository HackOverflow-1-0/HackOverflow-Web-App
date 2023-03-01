import React from 'react';
import './GeneralSponsorCard.css';


function GeneralSponsorCard({ title, image, dataAos, weblink }) {


    return (
        <div className="flex flex-col items-center justify-center" data-aos={dataAos}>
            <h1 className="py-4 capitalize text-[2rem] lg:text-[2rem] font-normal">
                {title}
            </h1>
            <div
                className={"mediumcard"}
            >
                <a href={weblink} target="_blank" rel="noreferrer">
                    <img
                        src={image}
                        alt={"event card"}
                    />
                </a>

            </div>
        </div>
    )
}

export default GeneralSponsorCard;
