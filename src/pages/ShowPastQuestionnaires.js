import React, { useEffect, useState } from "react";
import { IpssContext } from "../context/context";
import ShowPastItems from "../comp/pastQuestionnaires/ShowPastItems"
import useFetchFromDB from "../util/useFetchFromDB";

const ShowPastQuestionnaires = () => {
  const { id, url, erasedItems } = React.useContext(IpssContext);
  const [{ data }] = useFetchFromDB(id, url);
  const [pastQuest, setPastQuest] = useState([]);

  const findScore = (questionnaire) => {
    if (!questionnaire) return
    let qOLScore;
    
    const score = questionnaire.reduce((sum, item) => {
      if (item.question === "Quality of Life") {
        qOLScore = item.answer;
        return sum;
      }
      return sum + item.answer;
    }, 0);

    return { score, qOLScore };
  };

  // grab the old questionnaires of the user (if not erased)
  useEffect(() => {
    const pastQuestOfUser=[]
    for (const key in data) {
      if (erasedItems.includes(key)) continue
      const { id: userid, date, questionnaire } = data[key];
      if (userid === id) {
        pastQuestOfUser.push({ date, questionnaire, ...findScore(questionnaire), fbkey: key })
    }}
    setPastQuest(pastQuestOfUser)
    
  }, [data, id, erasedItems]);
 
  const pastQuestExists = pastQuest && pastQuest.length > 0
  const nothingToDisplay = (!id || pastQuest.length === 0)
  return (

    <div>
         {pastQuestExists && <ShowPastItems pastQuest={pastQuest} erased={erasedItems} />}
      {nothingToDisplay && <div className='mt container center'>NO Previous IPSS Questionnaires found. Please Try again.</div>}
    </div>
  );
};

export default ShowPastQuestionnaires;
