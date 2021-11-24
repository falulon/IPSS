import React, { useState } from "react";
import MarkedQuestion from "../../newQuestionnaire/Question";
import Answers, { qOL } from "./Answers"; //use the questions to render them with the saved answer numbers
import { Link } from "react-router-dom";
import ipssQuestions from "../../../data/ipssQuestions";

const AnswersList = () => {
  const [score, setScore] = useState(0);
  const [qOLscore, setQOLScore] = useState(0);
  const numOfQs = ipssQuestions.length + (qOL.length || 1)


  function ignoreConsoleError() {// eslint-disable-line no-unused-vars 
    return score + qOLscore}

// generate old ipss questionnaire with marked qs
const MarkedQuestions = () => 
    { return (Answers.map((question) => {
    return (
      <MarkedQuestion
        key={question.id}
        {...question}
        markedAnswer={question.markedAnswer}
        setScore={setScore}
        numOfQs={numOfQs}
      />
    );
  }))
}


  return (
    <div className='container'>
      <form>
       <MarkedQuestions />
        <MarkedQuestion
          key={qOL.id}
          {...qOL}
          markedAnswer={qOL.markedAnswer}
          setScore={setQOLScore}
          numOfQs={numOfQs}
        />
      </form>
       <Link to='/'>
        <button className="btn">Back</button>
      </Link>
    </div>
  );
};

export default AnswersList;
