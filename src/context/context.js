import React, { useState } from "react";
import { format } from "date-fns";
import { initializeApp } from "firebase/app";
import { DeleteFromDB, PostToDB } from "../util/FetchFns";

const IpssContext = React.createContext();

const appId = process.env.REACT_APP_ACCESS_KEY_FIREB_APPID;
const apiKey = process.env.REACT_APP_ACCESS_KEY_FIREB_APIKEY;
const url = `https://ipss-76a16-default-rtdb.firebaseio.com`;

const IpssProvider = ({ children }) => {
  const [id, setId] = useState();
  const [isCompleted, setIsCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState();
  const [erasedItems, setErasedItems] = useState([]);

  const firebase = () => {
    const firebaseConfig = {
      apiKey: apiKey,
      authDomain: "ipss-76a16.firebaseapp.com",
      projectId: "ipss-76a16",
      storageBucket: "ipss-76a16.appspot.com",
      messagingSenderId: "781645456732",
      appId: appId,
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  };

  const saveToDB = (dataToSave) => {
    const data = { id, date: todayDate(), questionnaire: dataToSave };
    PostToDB(url, id, data, setNewError);
  };

  const DeleteOldQuestionnaire = async ({ key }) => {
    const specificUrl = `${url}/ipss/users/${id}`;
    await DeleteFromDB(specificUrl, key, setNewError);
    setErasedItems((prevState) => [...prevState, key]);
    setIsCompleted(false);
  };

  const todayDate = () => {
    return format(new Date(), "yyyy-MM-dd h:mm aa");
  };

  const newQuestionnaire = () => {
    setAnswers([]);
    setIsCompleted(false);
  };

  const setMarkedAnswers = (markedAnswers) => {
    setAnswers(markedAnswers);
  };

  const questionnaireCompleted = () => {
    setIsCompleted(true);
  };

  const setUId = (id) => {
    setId(id);
  };
  const backHome = () => {
    window.location.replace("/");
  };

  const setNewError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <IpssContext.Provider
      value={{
        id,
        setUId,
        url,
        error,
        isCompleted,
        questionnaireCompleted,
        newQuestionnaire,
        answers,
        setMarkedAnswers,
        saveToDB,
        DeleteOldQuestionnaire,
        setNewError,
        erasedItems,
        backHome,
      }}
    >
      {children}
    </IpssContext.Provider>
  );
};

export { IpssContext, IpssProvider };
