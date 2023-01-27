import React from 'react';
import './PriceCard.css';


function PriceCard({ image, dataAos }) {


    return (
        <>
            <div data-aos={dataAos}
                className={"eventcard"}
            >
                <img
                    src={image}
                    alt={"event card"}
                />
            </div>
        </>
    )
}

export default PriceCard;
