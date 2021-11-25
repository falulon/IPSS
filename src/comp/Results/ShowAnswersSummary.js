import React, {useState} from 'react'
import { Link } from "react-router-dom";


// summary section each answer with the adjacent severity color
const ShowAnswers = ({ answers }) => {
    const [showSummary, setShowSummary] = useState(false);
    const toggleShowSummary = () => { setShowSummary((prev) => !prev) }
  
    const questionnaireItems = answers.map((item, index) => {
      const { question, label, answer } = item;
      return (
        <div key={index} className='completed-questionnaire'>
          <h5 className='rounded questionnaire-item'>{question}</h5>
          <p className={`rounded questionnaire-item label results-qol-${answer}`}>
            {label}
          </p>
          <p className={`rounded questionnaire-item questionnaire-item-qol results-qol-${answer}`}>
            {answer}
          </p>
        </div>
      );
    });
  
    return (
      <>
        <div>
          <h3
            className='container heading mt rounded'
            onClick={toggleShowSummary}
          >
            Summary
          </h3>
          {showSummary && <div>{questionnaireItems}</div>}
        </div>
        <Link to='/answers'>
          <button className='rounded mt'>FULL FORM</button>
        </Link>
      </>
    );
  };
  
  export default ShowAnswers
