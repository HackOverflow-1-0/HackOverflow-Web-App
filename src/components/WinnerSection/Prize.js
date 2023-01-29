import React from 'react';
import { motion } from 'framer-motion';



function Prize({ prizeMoney }) {


    return (
        <>
            <motion.div
                style={{
                    alignSelf: 'center',
                    marginBottom: '.25rem'
                }}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 0.75
                        }
                    },
                    hidden: { opacity: 0 }
                }}
            >
                <p
                    alt=""
                    style={{
                        overflow: 'hidden',
                    }}
                // eslint-disable-next-line no-undef
                >{prizeMoney}</p>
            </motion.div>

        </>
    )
}

export default Prize;
