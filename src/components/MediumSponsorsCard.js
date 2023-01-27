import React from 'react';
import './MediumSponsorsCard.css';


function MediumSponsorsCard({ title, image, dataAos }) {


    return (
        <div className="flex flex-col items-center justify-center" data-aos={dataAos}>
            <h1 className="py-4 capitalize text-[2rem] lg:text-[2rem] font-normal">
            {title}
            </h1>
            <div
                className={"mediumcard"}
            >
                <img
                    src={image}
                    alt={"event card"}
                />
            </div>
        </div>
    )
}

export default MediumSponsorsCard;
