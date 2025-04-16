import React from 'react';

const ServerErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>500 - Internal Server Error</h1>
      <p>죄송합니다. 서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
    </div>
  );
};

export default ServerErrorPage;
