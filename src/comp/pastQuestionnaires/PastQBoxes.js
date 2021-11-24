import React from 'react'
import { motion } from 'framer-motion'

const PastQBoxes = ({pastQuest, handleClick}) => {return pastQuest.map((item, index) => {
    const { date, score, qOLScore, questionnaire, fbkey } = item;
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}
      
        className='pastQuest'
        key={fbkey}
        id={index}
        onClick={() => handleClick(fbkey, date, questionnaire)}
      >
        <p>
          <b>IPSS Score</b>
        </p>
        <p>
          {score} ({qOLScore}){" "}
        </p>
        <p className="date-in-box">{date}</p>
      </motion.div>
    );
  })}

export default PastQBoxes

