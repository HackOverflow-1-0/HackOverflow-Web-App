import { motion } from 'framer-motion';
import Prize from './Prize';

export default function PodiumStep({ podium, winner }) {
  const offset = podium.length - winner.position

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        placeContent: 'center'
      }}
    >
      <Prize prizeMoney={winner.prize} />
      <motion.div
        style={{
          width: '8rem',
          placeContent: 'center',
          display: 'flex',
          borderTopLeftRadius: '.5rem',
          borderTopRightRadius: '.5rem',
          borderColor: 'rgba(190,24,93,1)',
          backgroundColor: '#6B32A7',
          marginBottom: -1,
          // filter: `opacity(${0.1 + offset / podium.length})`
        }}
        className="mx-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            height: 400 * (offset / podium.length),
            opacity: 1,
            transition: {
              delay: 1 + offset,
              duration: 2,
              ease: 'backInOut'
            }
          },
          hidden: { opacity: 0, height: 0 }
        }}
      >
        <span style={{ color: 'white', alignSelf: 'flex-end', fontSize: '1.5rem' }}>
          {winner.position + 1}
        </span>
      </motion.div>
    </div>
  )
}
