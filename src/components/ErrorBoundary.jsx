import React from 'react';
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
      <h1>Something went wrong</h1>
      <p>{error.message || 'An unexpected error occurred.'}</p>
    </div>
  );
};

export default ErrorBoundary;
