import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../images/preloader.gif";
import styled from "styled-components";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <div className='container'>
          <img src={loadingGif} alt='spinner' />{" "}
        </div>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <div className='container'>
          <h1>{error.message}</h1>
        </div>
      </Wrapper>
    );
  }
  return <>{children}</>;
}

const Wrapper = styled.div`
  .container {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }

  .img {
    width: 150px;
  }
`;

export default AuthWrapper;
