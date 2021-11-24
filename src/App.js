import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProgressBar from "react-scroll-progress-bar"; 
import Navbar from "./comp/Navbar";
import Error from "./comp/Error";
import AnswersList from "./comp/pastQuestionnaires/showFullOldQuestionnaire/AnswersList";
import ShowPastQuestionnaires from "./pages/ShowPastQuestionnaires";
import { Home, AuthWrapper, Login, LogoutButton, QsOrResults as ShowQsOrResults } from "./pages";


function App() {
 


return (
    
    <AuthWrapper>
      <ProgressBar bgcolor='#00b3cd' />
      <Navbar />
      <Error />
      <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/login' element={ <Login/> } />
      <Route path='/logout' element={ <LogoutButton /> } />

        <Route path='/past' element={<ShowPastQuestionnaires />} />

        <Route path='/user/:user' element={<ShowQsOrResults />} />
        <Route path='/answers' element={<AnswersList />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </AuthWrapper>
  );
}

export default App;
