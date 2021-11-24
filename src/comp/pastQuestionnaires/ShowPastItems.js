import React, { useState, useEffect, useRef } from "react";
import { IpssContext } from "../../context/context";
import Results from "../Results/Results";
import ChartComponent from "../Charts/Chart2d";
import styled from 'styled-components';
import PastQBoxes from "./PastQBoxes";

const ShowPastItems = ({ pastQuest }) => {
  const questInfoRef = useRef()
  const { id, setMarkedAnswers, questionnaireCompleted } = React.useContext(IpssContext);
  const [showItem, setShowItem] = useState(); //contains the specific old ipss selected to present
  const [chartData, setChartData] = useState([]);
  
  // enable `New questionnaire` button
  useEffect(() => {
    questionnaireCompleted()
    },[questionnaireCompleted])

  // handle click on past questionnaire box. show Questionnaire deatils
  const handleClick = (fbkey, date, questionnaire) => {
    setMarkedAnswers(questionnaire);
    setShowItem(<Results user={id} date={date} answers={questionnaire} fbkey={fbkey} />);
    questInfoRef.current.scrollIntoView({ block: 'start',  behavior: 'smooth' }) 
      
  };

// Chart -  grab data from each past questionnaire and set charts
  useEffect(() => {
    setChartData(
      pastQuest.map((item) => {
        const { date, score } = item;
        return { label: date.slice(5, 10), value: score, tooltext: `Date: ${date} {br} Score: ${score}` };
      })
    );
  }, [pastQuest]);

  return (
    <Wrapper>
      <div className="displayed-q" ref={questInfoRef}>
        {showItem}
      </div>
      <div className='container past-container'>
        <PastQBoxes pastQuest={pastQuest} handleClick={handleClick} />
      </div>
      <div className='chart-container'>
        <ChartComponent data={chartData} />
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.div`
 .date-in-box { 
color: #f9f9f9;
  font-family: monospace;
font-size: 1.2rem; }
`;

export default ShowPastItems;

