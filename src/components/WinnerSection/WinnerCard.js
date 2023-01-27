import React from 'react'
// import { motion } from 'framer-motion'

export default function WinnerCard() {
    return (
        <div
            className="flex items-center my-3 bg-white rounded-lg shadow border border-gray-300 hover:border-pink-300 hover:bg-pink-200 cursor-pointer"
        >
            {/* <div className="text-lg w-10">{positions[winner.place]}</div> */}
            <div className="text-lg">position</div>


            <img
                alt=""
                className="rounded-full overflow-hidden border border-gray-200 shadow-sm w-11 h-11 mr-3"
            />

            <div className="text-sm flex-grow">
                <p className="text-gray-900 leading-none font-semibold">
                    winner
                </p>
                {/* <p className="text-gray-600">{prizes[winner.place]}</p> */}
                <p className="text-gray-600">prices winner</p>

            </div>
        </div>
    )
}
