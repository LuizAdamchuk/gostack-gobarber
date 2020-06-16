import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../context/ToastContext';
import { Container } from './style';
import { Toast } from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithAnimation = useTransition(
    messages,
    (message) => message.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    },
  );

  return (
    <Container>
      {messageWithAnimation.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};
