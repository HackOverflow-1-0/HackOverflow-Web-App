import React from 'react';
import './TitleSponsorsCard.css';


function TitleSponsorsCard({ image, dataAos }) {


    return (
        <div className="py-4 flex space-x-2 justify-center" data-aos={dataAos}>
            <div
                className={"eventcard"}
            >
                <img
                    src={image}
                    alt={"event card"}
                />
            </div>
        </div>
    )
}

export default TitleSponsorsCard;
