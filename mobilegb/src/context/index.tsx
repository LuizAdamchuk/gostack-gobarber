import React from 'react';

import { AuthProvider } from './AuthContext';

export const AppContextProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
