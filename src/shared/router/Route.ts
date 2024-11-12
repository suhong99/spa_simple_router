import React, { ReactElement } from 'react';

interface RouteProps {
  path: string;
  component: ReactElement;
}

const Route: React.FC<RouteProps> = ({ component }) => component;

export default Route;
