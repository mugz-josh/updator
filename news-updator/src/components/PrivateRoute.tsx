
import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  isSignedIn: boolean;
  children: React.ReactNode;
};

const PrivateRoute: React.FC<Props> = ({ isSignedIn, children }) => {
  return isSignedIn ? <>{children}</> : <Navigate to="/signin" />;
};

export default PrivateRoute;