import React from "react";
import Results from "../comp/Results/Results";
import QuestionsList from "../comp/newQuestionnaire/QuestionsList";
import { IpssContext } from "../context/context";

const QsOrResults = () => {
  const { isCompleted } = React.useContext(IpssContext);
  return (
    <>
     {isCompleted ? <Results /> : <QuestionsList />}
    </>
  );
};

export default QsOrResults;
