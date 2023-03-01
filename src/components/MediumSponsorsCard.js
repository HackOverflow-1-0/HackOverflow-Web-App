import React from 'react';
import './MediumSponsorsCard.css';


function MediumSponsorsCard({ title, image, dataAos, weblink }) {


    return (
        <div className="flex flex-col items-center justify-center" data-aos={dataAos}>
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

export default MediumSponsorsCard;
