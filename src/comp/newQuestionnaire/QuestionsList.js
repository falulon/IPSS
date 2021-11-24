import React, { useEffect, useRef, useState } from "react";
import { CircleIndicator } from "../CircleIndicator";
import ipssQuestions from "../../data/ipssQuestions"; //Lodd questions
import Question from "./Question";
import { qOL } from "../../data/ipssQuestions";
import { IpssContext } from "../../context/context";
import { IntroDesc } from "../../pages/Home";

const QuestionsList = () => {
  const { questionnaireCompleted, setMarkedAnswers, saveToDB, setUId } =
    React.useContext(IpssContext);

    useEffect(()=>{
      setUId(window.location.pathname.slice(6));
    }, [setUId])
  const [score, setScore] = useState(0);
  const [qOLscore, setQOLScore] = useState(0);
  const numOfQs = ipssQuestions.length + (qOL.length || 1);
  const formRef = useRef();

  function ignoreConsoleError() {// eslint-disable-line no-unused-vars 
    return qOLscore}
    
  // save the checked answers into an array, then send it to context
  const grabCheckedAnswers = (elements) => {
    const submittedAnswers = Array.from(elements);
    const checkedAnswers = submittedAnswers.reduce((all, item) => {
      if (item.checked) {
        return [
          ...all,
          {
            question: item.name,
            answer: parseInt(item.dataset["id"]),
            label: item.dataset["label"],
          },
        ];
      }
      return all;
    }, []);

    questionnaireCompleted();
    return checkedAnswers;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const allAnswers = grabCheckedAnswers(e.target.elements);
    setMarkedAnswers(allAnswers);
    saveToDB(allAnswers);
  };

  return (
    <>
      <CircleIndicator />
      <div className='container'>
        <IntroDesc />
        <form onSubmit={submitHandler} ref={formRef}>
          {ipssQuestions.map((question) => {
            return (
              <Question
                key={question.id}
                {...question}
                setScore={setScore}
                numOfQs={numOfQs}
                formRef={formRef}
              />
            );
          })}
          <Question
            key={qOL.id}
            {...qOL}
            setScore={setQOLScore}
            numOfQs={numOfQs}
            formRef={formRef}
          />
          <button className='btn'>Get Score</button>
        </form>
        {score !== 0 ? score : ""}
      </div>
    </>
  );
};

export default QuestionsList;
