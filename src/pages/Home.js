import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { motion } from 'framer-motion'

const Intro = () => { 
  return (<p className="intro">The IPSS questionnaire allows your urologist to better understand 
  the severity of your symptoms.</p>)
}

export const IntroDesc = () => {return (<><p className="intro desc">There are 7 questions relating to symptoms you might be 
experiencing,  and  one  question  relating  to  your  overall  quality  of 
life.<span className="intro desc"> Once  you  have  scored  each  question,  the  values  are  added 
together to give an indication of the severity of your symptoms. </span></p></>)}


export const Home = () => {
  const { isAuthenticated, user } =
    useAuth0();
  const isUser = isAuthenticated && user;
  const [linkUrl, setLinkUrl] = useState("");

  const cleanUserName = (name) => {
    return name.replace("@", "-").replace(".", "_");
  };

  useEffect(() => {
    if (!user) {
      window.location.replace("/login");
    }
    if (isUser) {
      setLinkUrl(cleanUserName(user.name));
    }
  }, [user, isUser]);


  return (
    <Wrapper>
      <section className='btn-container mt'>
        {linkUrl !== "" && (
          <Link to={`user/${linkUrl}`} className='link-btn'>
            Start
          </Link>
        )}
      </section>
      <section className='box'>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <Intro />
        </motion.div>
        <motion.div
          initial={{ x: +1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <IntroDesc />
        </motion.div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px auto;
  text-align: center;
  gap: 1.5rem;

  .btn-container {
    background: #d1eafa;
    font-size: 1.5rem;
  }
  .link-btn {
    text-align: center;
    font-size: 1.5rem;
    background: #379ee4;
    border-color: white;
    margin: 0 auto;
    padding: 1rem;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    width: 20vw;
    max-width: 20vw;
  }
  .box {
    background: rgba(12,123,123,0.1);
    padding: 4rem;
  }
  .intro { 
    font-size: 2rem; 
    font-weight: 600;
    max-width: 600px;
    color: #379aa5;
    margin: 10vh auto; 
  }
  .desc { 
    text-align: start;
    font-weight: 400;
    font-size: 1.5rem; 
    max-width: 500px;
    color: #3e627e;
    margin: 1vh auto;
  }
`;
