import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { IpssContext } from "../context/context";
import styled from 'styled-components';

const Navbar = () => {
  const {isAuthenticated, logout, user} = useAuth0();
  const isUser = isAuthenticated && user; 
  const { id, newQuestionnaire, isCompleted } =
  React.useContext(IpssContext);

  return (
    <>
      {isUser && <Wrapper>
        <div className='link'>
          <span>
            <Link to='/'>Home</Link>
            </span>
          <span>
            {isCompleted && (
              <Link to='/' onClick={newQuestionnaire}>
                New 
              </Link>
            )}
          </span>
          <span>

          {id && <Link to='/past'>Past IPSS</Link>}
          </span>
        </div>
        <div className='user-links'>
          {user.picture && <img src={user.picture} alt={user.name} />}
          {user.name && (
            <h4>
              📄 {user.name.toUpperCase()}
            </h4>
          )}
          {(
            <button
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              Logout
            </button>
          ) }
        </div>
      </Wrapper>}
    </>
  );  
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  text-align: center;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 0.8rem;
    text-transform: capitalize;
    cursor: pointer;
  }
  .link {
    display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
}

.link a { 
color: gray;
text-decoration: none;
text-transform: capitalize;
font-size: 1rem;

}

.user-links { 
  display: grid;
  grid-template-columns: auto auto 100px;
}
`;

export default Navbar;
