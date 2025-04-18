import { UI_ERRORS } from '@/constants/errors';
import NotFoundPage from '@/pages/error/NotFoundPage';
import ServerErrorPage from '@/pages/error/ServerErrorPage';
import React from 'react';

const ErrorBoundary = ({ error }) => {
  if (!error) {
    return (
      <div>
        <h1>에러발생</h1>
        <p>{UI_ERRORS.UNKNOWN}</p>
      </div>
    );
  }

  if (error.status >= 500) {
    return <ServerErrorPage />;
  }

  return (
    <div>
      <h1>에러발생</h1>
      <p>{error.message || UI_ERRORS.UNKNOWN}</p>
    </div>
  );
};

export default ErrorBoundary;
