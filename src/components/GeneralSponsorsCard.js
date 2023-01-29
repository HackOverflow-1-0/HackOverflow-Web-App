import React from 'react';
import './GeneralSponsorsCard.css';


function GeneralSponsorsCard({ image, dataAos }) {


    return (
        <div className="flex flex-col items-center justify-center" data-aos={dataAos}>
            <div
                className={"generalcard"}
            >
                <img
                    src={image}
                    alt={"event card"}
                />
            </div>
        </div>
    )
}

export default GeneralSponsorsCard;
