import React, { useState, useEffect } from "react";
import { IpssContext } from "../../context/context";
import ShowSummary from "./ShowAnswersSummary";
import { severityScale
 } from "../../data/ipssQuestions";
import DeleteItem from "./DeleteItem";
import { motion } from 'framer-motion'


const Results = ({ date, user, fbkey }) => {
  const { answers, backHome } = React.useContext(IpssContext);
  const [severityLevel, setSeverityLevel] = useState("null")

  // match the current score to and set the severity level in accordance
  const setSeverity = (score) => {
    severityScale.forEach((severity) => {
      if (score >= severity.minScore && score <= severity.maxScore) {
        setSeverityLevel(severity.level);
        return;
      }
    });
  };
  
  // sum up the answers, ignore QoL questions
  const score = answers.reduce((sum, item) => {
    if (item.question !== "Quality of Life") {
      return sum + item.answer;
    } else {
      return sum;
    }
  }, 0);

  useEffect(() => {
    setSeverity(score);
  }, [score]);


// ui info-box on score and severity

const InfoAboutSeverity = ({ level, score }) => {
  return (
    <motion.div className={`results ${level}`} initial={{opacity: 0.6}} animate={{opacity: 1}} transition={{delay: 0.8}}>
      <p>Your symptom score — {score} </p>
      {level}
    </motion.div>
  );
};

const InfoAboutQOL = ({ qOLAnswer }) => {
  return (
    <motion.div className={`results results-qol results-qol-${qOLAnswer.answer} `} initial={{opacity: 0.8}} animate={{opacity: 1}} transition={{delay: 0.8}}>
      <h2>Quality of Life Score </h2>
      <h3>{qOLAnswer.label} — {qOLAnswer.answer}</h3>
    </motion.div>
  );
};

if (!answers || answers.length === 0) { 
backHome()}

  return ( 
    <div className='container'>
      <motion.div className='success' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}>
        {user} 📑 {date}
      </motion.div>
      
      {fbkey && <DeleteItem fbkey={fbkey} />}
      <InfoAboutSeverity level={severityLevel} score={score} />
      <InfoAboutQOL qOLAnswer={answers[answers.length-1]} />
      <ShowSummary answers={answers} />
    </div>
  );
};


export default Results;
