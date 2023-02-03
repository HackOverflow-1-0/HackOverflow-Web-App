import React from 'react';
import './TitleSponsorsCard.css';


function TitleSponsorsCard({ image, dataAos, weblink }) {


    return (
        <div className="py-4 flex space-x-2 justify-center" data-aos={dataAos}>
            <div
                className={"eventcard"}
            >   <a href={weblink} target="_blank" rel="noreferrer">
                    <img
                        src={image}
                        alt={"event card"}
                    />
                </a>
            </div>
        </div>
    )
}

export default TitleSponsorsCard;
