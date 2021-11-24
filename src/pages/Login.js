import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";
import loginImg from "../images/login-img.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className='login-container'>
        <img src={loginImg} alt='user' />
        <h1>IPSSment</h1>
        <button className='btn' onClick={loginWithRedirect}>
          Log in / Sign up
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 80vh;
  display: grid;
  place-items: center;
  .login-container {
    width: 90vw;
    max-width: 500px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    max-width: 100%;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
