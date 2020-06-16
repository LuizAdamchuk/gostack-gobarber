import { animated } from 'react-spring';

import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: string;
  hasDescription: number;
}

export const Container = styled(animated.div)<ContainerProps>`
  display: flex;
  width: 360px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.9;

  position: relative;
  padding: 16px 30px 16px 16px;

  background: #ebf8ff;
  color: #3172b7;
  align-items: flex-start -12%;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.type === 'sucess' &&
    css`
      background: #e6fffa;
      color: #2e656a;
    `}
  ${(props) =>
    props.type === 'error' &&
    css`
      background: #fddede;
      color: #c53030;
    `}
    
  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 12px;
    border: 0;
    opacity: 0.8;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
    `}
`;
