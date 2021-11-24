import React, { useEffect, useState } from "react";
import { IpssContext } from "../../context/context";

// generate IPSS questionnaire with/without answers marked as per filled out
const Question = ({ heading, title, options, setScore, id, numOfQs, formRef }) => {
  const { answers } = React.useContext(IpssContext);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [markedAnswer, setMarkedAnswer] = useState(undefined);
  const isDisabled = (answers.length !== 0);
  const qId = id.slice(1);

  const markAnswer = (index) => {
    setScore((prevScore) => {
      return prevScore - currentAnswer + index;
    });
    setCurrentAnswer(index);
    formRef.current.children[qId].scrollIntoView({ block: 'start',  behavior: 'smooth' }) 

  };

  useEffect(() => {
    let savedAnswer = null;
    if (answers && answers[qId] && answers[qId].answer) {
      savedAnswer = answers[qId].answer;
    }
    setMarkedAnswer(savedAnswer);
  }, [answers, qId]);

  const optionsForm = (<div className='answers-form'>
  {options.map((option, index) => {
    const optionNum = `${heading}${index}`;
    const divId = `div${optionNum}`;
    const answerClass =
      markedAnswer === index ? `results-qol-${index}` : ``;
    return (
      <label htmlFor={optionNum} key={divId}>
        <div  className={`radio ${answerClass}`}>
          <input
            required
            type='radio'
            disabled={isDisabled}
            name={heading}
            id={optionNum}
            data-id={index}
            data-label={option}
            onClick={() => markAnswer(index)}
          />
          {option}
        </div>
      </label>
    );
  })}
</div>)



  return (
    <article>
      <div className='q-number'>{`${id.slice(1)} / ${numOfQs}`}</div>
      <h2 className='heading'>{heading}</h2>
      <h4>{title}</h4>
      {optionsForm}
    </article>
  );
};

export default Question;
