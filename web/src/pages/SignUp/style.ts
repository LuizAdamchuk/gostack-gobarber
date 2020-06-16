import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  align-items: stretch;

  display: flex;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;

  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppearedAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AnimationContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${AppearedAnimation} 2s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      text-decoration: none;
      color: #f4ede8;

      display: block;
      margin-top: 24px;

      transition: color 0.2s;
      &:hover {
        color: ${shade(0.25, '#f4ede8')};
      }
    }
  }

  > a {
    text-decoration: none;
    color: #f4ede8;
    margin-top: 24px;

    display: flex;
    align-items: center;

    transition: color 0.2s;
    &:hover {
      color: ${shade(0.25, '#f4ede8')};
    }

    svg {
      margin-right: 12px;
    }
  }
`;

export const Background = styled.div`
  background: url(${signUpBackgroundImg}) no-repeat center;
  flex: 1;
  background-size: cover;
  transition: background 1s;
`;
