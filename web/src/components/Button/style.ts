import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 0;
  margin-top: 16px;
  font-weight: 600;
  color: #312e38;

  transition: background 0.2s;
  &:hover {
    background: ${shade(0.25, '#ff9000')};
  }
`;
