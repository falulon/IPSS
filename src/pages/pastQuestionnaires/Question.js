import React, { useState } from "react";
import { useRoutes } from "react-router";
import { IpssContext } from "../../context/context";

const Question = ({ heading, title, options, setScore }) => {
const [currentAnswer, setCurrentAnswer] = useState(0)
const [isDisabled, setIsDisabled] = useState(answers !== null)
if (answers) const {answer} = answers

return (
    <article>
      <h2 className="heading">{heading}</h2>
      <h4>{title}</h4>
      <div className="answers-form"> 
        {options.map((option, index) => {
          const optionNum = `${heading}${index}`;
          const divId = `div${optionNum}`
          return (
            <div key={divId} className="radio">
              <input required
                type='radio'
                disabled={isDisabled}
                name={heading}

                id={optionNum}
                data-id={index}
                data-label={option}
                onClick={
                    async ()=>
                    { await setScore((prevScore)=> {
                        return prevScore-currentAnswer + index})
                        setCurrentAnswer(index)

                    }
                }
                
              />
              <label htmlFor={optionNum}>{option}</label>
            </div>
          );

        })}
      </div>
    </article>
  );
};

export default Question;
