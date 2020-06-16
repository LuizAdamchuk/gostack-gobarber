import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #312e15;

    bottom: calc(100% + 12px);

    left: 50%;
    transform: translateX(-15%);

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      position: absolute;
      top: 100%;
      border-width: 6px 6px 0 6px;

      left: 16%;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
