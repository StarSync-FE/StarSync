import React from 'react';
import { HTTP_ERRORS } from '../constants/errors';
import NotFoundPage from '../pages/NotFoundPage';
import ServerErrorPage from '../pages/ServerErrorPage';

const ErrorBoundary = ({ error }) => {
  if (error.status === 404) {
    return <NotFoundPage />;
  }

  if (error.status >= 500) {
    return <ServerErrorPage />;
  }

  return (
    <div>
      <h1>에러발생</h1>
      <p>{error.message || HTTP_ERRORS.UNKNOWN_ERROR}</p>
    </div>
  );
};

export default ErrorBoundary;
